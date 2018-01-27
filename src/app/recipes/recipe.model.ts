import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  public id: number

  constructor (name: string, desc: string, imagePath: string, Ingredients: Ingredient[], id:number) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.id = id;
    this.ingredients = Ingredients;
  }

}
