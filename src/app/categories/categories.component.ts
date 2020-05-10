import { CategoriesService } from './../categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  title = "Categories List";
  categories;

  constructor(service:CategoriesService)  {
    this.categories = service.getCategories();
  }

  getTitle() {
    return this.title;
  }

  ngOnInit() {
  }

}
