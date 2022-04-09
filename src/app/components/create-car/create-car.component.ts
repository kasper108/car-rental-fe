import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars.service";
import {NgForm} from "@angular/forms";

@Component({
  "selector": 'app-create-car',
  "templateUrl": './create-car.component.html',
  "styleUrls": ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  constructor(private carService: CarsService) { }

  ngOnInit(): void {
  }

  createCar(f: NgForm): void {
    console.log(f.value);
    this.carService.createCar(f.value).subscribe({
    "next": result => console.log(result),
    "error": err => console.log(err)
  })
}
}
