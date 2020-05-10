import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  title = "Categories List";
  categories;

  constructor(service:CategoryService) { 
    this.categories = service.getCategories();
  }

  getTitle() {
    return this.title;
  }

  ngOnInit() {
  }

}
