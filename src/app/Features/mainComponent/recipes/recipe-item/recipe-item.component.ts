import { Component } from '@angular/core';
import { RecipeModel } from 'src/app/Shared/models/Recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  recipes: RecipeModel[] = [
    {
      name: 'Recipe One',
      description: 'Some description for recipe One',
      imgUrl:
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
    },
  ];
}
