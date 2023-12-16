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