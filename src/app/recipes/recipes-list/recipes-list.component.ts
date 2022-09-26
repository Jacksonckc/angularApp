import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'Just a test',
      'https://img.freepik.com/free-photo/hamburger-with-beef-meat-burger-fresh-vegetables-dark-surface_2829-5883.jpg?w=1380&t=st=1664150729~exp=1664151329~hmac=ee35f0191ec764d15a50e78c5aff296eb29056cb2a261ff8098435a6e6067fed'
    ),
    new Recipe(
      'A test Recipe',
      'Just a test',
      'https://img.freepik.com/free-photo/hamburger-with-beef-meat-burger-fresh-vegetables-dark-surface_2829-5883.jpg?w=1380&t=st=1664150729~exp=1664151329~hmac=ee35f0191ec764d15a50e78c5aff296eb29056cb2a261ff8098435a6e6067fed'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  addNewRecipe() {
    this.recipes.push(
      new Recipe(
        'A test Recipe',
        'Just a test',
        'https://img.freepik.com/free-photo/hamburger-with-beef-meat-burger-fresh-vegetables-dark-surface_2829-5883.jpg?w=1380&t=st=1664150729~exp=1664151329~hmac=ee35f0191ec764d15a50e78c5aff296eb29056cb2a261ff8098435a6e6067fed'
      )
    );
  }
}
