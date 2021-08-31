import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [new Ingredient("apple",5),
  new Ingredient("mango",3),
  new Ingredient("banana",2),
  new Ingredient("strawberry",8)
]

  constructor() { }

  ngOnInit(): void {
  }

}
