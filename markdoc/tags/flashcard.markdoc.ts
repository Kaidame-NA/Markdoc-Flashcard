import { Flashcard } from "../../components";
import { Tag } from "@markdoc/markdoc";
import { v4 as uuidv4 } from 'uuid';

export const flashcard = {
  render: Flashcard,
  description: "Display the content in a Flashcard component",
  children: ["paragraph", "tag", "list"],
  attributes: {
    display: {
      type: String,
      description: "Whether the flashcard is currently displaying the front or the back card",
    },
  },
};
