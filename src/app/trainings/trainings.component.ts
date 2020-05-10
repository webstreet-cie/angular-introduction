import { Component, OnInit } from '@angular/core';
import { TrainingsService } from './trainings.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  title = "Trainings List"
  trainings;

  constructor(service:TrainingsService) { 
    this.trainings = service.getTrainings();

  }

  getTitle(){
    return this.title;
  }

  ngOnInit() {
    var message = "Welcome students!";
    log(message);
  }

}

function log(message) {
  console.log(message);
}

function iteration(){
  for (let i=0;i<5;i++) {
    console.log(i);
  }
  //console.log("Final Result:" + i);
}

iteration();

const country = "France";
//country = "Great-Britain";

const countries = ["France", "Ireland"];
countries.push("Switzerland");

const towns = {name: "Paris"};
towns.name = "New-York";

let hello;
hello = "hello students!";
hello = true;
hello = 1;

interface Module {
  title:string;
  items: string[];
}

function createModule(module: Module): {title: string; items:string[]} {
  return module;
}

let module1 = createModule(
  {
    title: "The basics of HTML",
    items:["Meta tags","Heading tags", "paragraphs"]
  }
);

console.log(module1);

interface Training {
  display():void;
}

export class PayingTraining implements Training {
  constructor(
    private _title : string, 
    private description : string,
    private price?: number,
  
    ) {
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  display(): void {
    console.log(`Welcome to this training: ${this.title},  ${this.description}, ${this.price} $`);
  }

  calculatePricePerModule(price,moduleNumber) {
    let pricePerModule = price / moduleNumber;
    return pricePerModule;
  }
}

let angularTraining = new PayingTraining(
  "Angular - Create Web Applications", 
  "Learn to create web apps with Angular", 
  1490);
  angularTraining.title = "fake title";
  angularTraining.display();

  console.log("The price per module is: " + angularTraining.calculatePricePerModule(1490, 7));


