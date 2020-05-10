import { Injectable } from '@angular/core';
import { Category } from './../models/category.model';

@Injectable()
export class CategoryService {

  category1 = new Category(1, "Client Languages");
  category2 = new Category(2,"Server Languages");
  category3 = new Category(3, "Design");
  category4 = new Category(4, "Databases");

  getCategories() {
    let categories = [
        this.category1,
        this.category2,
        this.category3,
        this.category4,
      ];

      return categories;
}
}
