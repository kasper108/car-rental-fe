import {Component, OnInit} from '@angular/core';
import {CarsService} from "../../services/cars.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: any[] | undefined;
  errorFound: Boolean = false;

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {

    const carObserver = {
      next: (result: any) => {
        console.log(result)
        this.cars = result
      },
      error: (err: any) => {
        console.log(err)
        this.errorFound = false
      }
    }

    this.carsService.getCars().subscribe(carObserver);

  }

  deleteCar(id: Number): void {
    this.carsService.deleteCar(id).subscribe({
      next: (result: any) => {

      },
      error: (err => console.log(err))
    })
  }
}
