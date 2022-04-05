import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<any>{
    return this.httpClient.get<any>('http://localhost:8080/api/v1/cars/all');
  }

  deleteCar(id: Number): Observable<any> {
    return new Observable<any>();
  }
}
