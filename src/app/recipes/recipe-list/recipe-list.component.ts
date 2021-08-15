import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('test1', 'a test recipe',
    'https://media-cdn.tripadvisor.com/media/photo-o/13/a4/cc/3d/poulet-tikka-poulet-tikka.jpg'), new Recipe('test1', 'a test recipe',
      'https://media-cdn.tripadvisor.com/media/photo-o/13/a4/cc/3d/poulet-tikka-poulet-tikka.jpg')]

  constructor() { }

  ngOnInit(): void {
  }

}
