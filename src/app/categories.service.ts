import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

  getCategories() {
    let categories = [

      {
        name:'Databases'
      },
      {
        name:"Client languages"
      },
      {
        name:"Server languages"
      },
      {
        name:"UX/UI"
      }
    ];

    return categories;

  }
}
