import { Component, OnInit } from '@angular/core';
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: any[] | undefined;

  constructor(private carsService: CarsService ) {}

  ngOnInit(): void {
      this.carsService.getCars().subscribe(
      res => {this.cars = res}
    );
    //   console.log(this.carsService.getCars())
  }
}
