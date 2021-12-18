import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS99PhsMVrb_rWsx0Kw19i64xonQK09APqu18yI7b26wagDNxryV3AQk_AScEUzTSA-31Q&usqp=CAU')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
