export interface Categories {
  // write the property like property in api
  // json to interface
  id: number;
  name: string;
  photo: string;
  uuid:string;
  // categories:{name:string},
  // categories: SubCategories;
}

export interface SubCategories {
  name: string;
}
