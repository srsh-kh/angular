import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://www.add1tbsp.com/wp-content/uploads/2021/10/20210926-Epic-BoneBroth-TortillaSoup3650-1024x1536.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
