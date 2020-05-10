import { TrainingsService } from './trainings/trainings.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './trainings/trainings.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TrainingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
