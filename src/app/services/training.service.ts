import { Injectable } from '@angular/core';
import { Category } from './../models/category.model';
import {Training} from "../models/training.model";
import { Module } from './../models/module.model';

@Injectable()
export class TrainingService {

   trainings: Training[];


    getTrainings() {
        this.trainings = [
           {
            category:{id:1,name:"Client Languages"},
            title:"Angular - Create web applications",
            description: "In this course you will learn how to develop powerful web applications with Angular!",
            goals:["Develop powerful applications with Angular", "Master the framework"],
            practicalWork: "Create an Angular application from A à Z!",
            pedagogicalMethod: "Web development through practice and presentation of development cases from the real world",
            durationInHours: 21,
            reference: "ANG",
            price: 1400,
            modules: 
            [
               {
                  title:"Angular Introduction", 
                  items:["Understanding Angular versions", "Structure of an Angular Project", "Putting in place the development environment"]
               },
               {
                  title:"Angular fundamentals", 
                  items:["Angular building blocks", "Angular components"]
               },
            ]
              
           },
           {
            category:{id:3,name:"Design"},
            title:"WebDesign - Fundamentals",
            description: "In this course you will learn the fundamentals of web design.",
            goals:["Get the bases of WebDesign", "Be able to create application mockups using Adobe XD"],
            practicalWork: "You will create different web mockups with the software Adobe XD.",
            pedagogicalMethod:"Presentation of real-world mockups",
            durationInHours: 21,
            reference: "WDE",
            price: 1400,
            modules: 
            [
               {title:"Introduction to WebDesign", items:["Concepts UX/UI", "Libraries"]},
               {title:"Responsive grids", items:["What does Responsive mean?", "Why you should create responsive mock-ups"]},
            ]
           }

          ];

          return this.trainings;
    }
}