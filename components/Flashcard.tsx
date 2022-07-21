import React, { useEffect, useState } from "react";
import { CardFront } from "./CardFront";

// <Flashcard>  .....  </Flashcard>

export function Flashcard({ display = "front", children }) {
  const [displayOptions, setDisplayOptions] = useState("front");

  useEffect(() => {
    if (display !== displayOptions) {
      setDisplayOptions(display);
    }
  }, [display, children]);
  let childToDisplay;
  React.Children.forEach(children, (child) => {
    if(React.isValidElement(child)) {
      if(child.type.name === "CardFront" && displayOptions === "front") {
        childToDisplay = child;
      } else if (child.type.name === "CardBack" && displayOptions === "back") {
        childToDisplay = child;
      }
    }
  });

  function handleOnClick(event) {
    if(displayOptions === "front") {
      setDisplayOptions("back");
    } else if(displayOptions === "back") {
      setDisplayOptions("front");
    }
  }

  return (
    <div onClick = {handleOnClick} className = "flashcard w-72 h-48 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
      {childToDisplay}
    </div>
  );
}
