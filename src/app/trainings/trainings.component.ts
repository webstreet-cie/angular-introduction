import { TrainingService } from '../services/training.service';
import {Training} from '../models/training.model';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  title = "List of trainings";
  //trainings is a table of object Training
 trainings: Training[];
  constructor(service:TrainingService) { 
    this.trainings = service.getTrainings();
    console.log(this.trainings);
  }
 

  getTitle() {
    return this.title;
  }

  ngOnInit() {

  }
}










