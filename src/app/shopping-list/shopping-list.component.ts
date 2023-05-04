import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  addNewItem(item: Ingredient) {
    this.ingredients.push(item)
  }

  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomato', 10)
  ];
}
