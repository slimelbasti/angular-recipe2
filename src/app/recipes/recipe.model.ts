/**
 * Created by spectrum on 09/02/2018.
 */
export class Recipe {
  public name: string;
  public decription: string;
  public imagePath: string;

  constructor(name: string, desc: string, imagePath: string){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
