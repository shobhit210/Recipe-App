import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('A test recipe','A test description','https://www.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/5/20/mediterranian-lebanese-cuisine.jpg.transform/onm-articleimage/image.jpg'),
    new Recipe('A test recipe 2','A test description 2','https://www.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/5/20/mediterranian-lebanese-cuisine.jpg.transform/onm-articleimage/image.jpg'),
    new Recipe('A test recipe 3','A test description 3','https://www.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/5/20/mediterranian-lebanese-cuisine.jpg.transform/onm-articleimage/image.jpg'), 
    new Recipe('A test recipe 4','A test description 4','https://www.onmanorama.com/content/dam/mm/en/food/recipe/images/2021/5/20/mediterranian-lebanese-cuisine.jpg.transform/onm-articleimage/image.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
