import { JSONContent } from "@tiptap/react";

interface IRecipe {
  id: Number;
  name: String;
  description: String;
  ingredients: String;
  instructions: String;
  image: String;
  authorID: String;
  tags: ITags[];
  createdAt: Date;
  updatedAt: Date;
  tagsId: Number;
  stepsJSON: JSONContent;
}

interface ITags {
  id: Number;
  name: String;
  createdAt: Date;
  updatedAt: Date;
  recipies: IRecipe[];
}

export type {
    IRecipe,
    ITags
}