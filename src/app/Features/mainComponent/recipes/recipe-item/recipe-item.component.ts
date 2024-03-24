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
        'C:/Materialet/MEAN Fullstack/Angular_FullStack/images/BC-114.jpg',
    },
    {
      name: 'Recipe Two',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.Qui architecto eaque eum numquam?',
      imgUrl: 'C:/Materialet/MEAN Fullstack/Angular_FullStack/images/BC-55.jpg',
    },
    {
      name: 'Recipe Three',
      description: 'Quasi minima eveniet quam hic, doloribus quia culpa!',
      imgUrl: 'C:/Materialet/MEAN Fullstack/Angular_FullStack/images/BC-55.jpg',
    },
    {
      name: 'Recipe Four',
      description: 'Quasi minima eveniet quam hic, doloribus quia culpa!',
      imgUrl:
        'C:/Materialet/MEAN Fullstack/Angular_FullStack/images/Fried+Chicken+Sandwich+_+South+Minneapolis+_+Book+Club+Restaurant.jpg',
    },
    {
      name: 'Recipe Five',
      description: 'Quasi minima eveniet quam hic, doloribus quia culpa!',
      imgUrl:
        'C:/Materialet/MEAN Fullstack/Angular_FullStack/images/Paloma+Cocktail+_+South+Minneapolis+_+Book+Club+Restaurant.jpg',
    },
  ];
  recipe!: any;
}
