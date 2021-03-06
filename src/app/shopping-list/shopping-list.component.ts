import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient("Flour", 2),
    new Ingredient("Baking Soda", 1)
  ];

  OnAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  constructor() { }

  ngOnInit() {
  }

}
