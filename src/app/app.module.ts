import { CategoryService } from './services/category.service';
import { TrainingService } from './services/training.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TrainingService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
