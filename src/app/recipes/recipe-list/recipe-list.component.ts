import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Hot Cross Buns", "One a Penny", "https://d1doqjmisr497k.cloudfront.net/-/media/mccormick-us/recipes/mccormick/e/2000/easy-hot-cross-buns.jpg?vd=20180710T044745Z&hash=A2C271B2EF0F3A396AD1DD8E830D9C072F682CD7")
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  OnRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
