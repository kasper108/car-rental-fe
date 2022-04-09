import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  url ='http://localhost:8080/api/v1/cars'

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<any>{
    return this.httpClient.get<any>(this.url);
  }

  deleteCar(id: number): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  createCar(car : any): Observable<any> {
    return this.httpClient.post(this.url, car);
  }
}
