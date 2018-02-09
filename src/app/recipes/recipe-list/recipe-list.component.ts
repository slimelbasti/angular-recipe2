import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
new Recipe('a TEST RECIPE', 'this is simply a test', 'http://www.preparation-voyage.com/wp-content/uploads/2013/04/gastronomie-tunisie.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
