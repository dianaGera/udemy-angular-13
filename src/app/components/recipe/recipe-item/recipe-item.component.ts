import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipes.models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe = new Recipe(1, '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
