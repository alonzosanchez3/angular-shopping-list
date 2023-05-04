import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://www.savorynothings.com/wp-content/uploads/2022/01/oven-baked-salmon-recipe-image-9.jpg')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>()

  onRecipeClicked(recipe: Recipe) {
    this.selectedRecipe.emit(recipe)
  }


}
