import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Car } from 'src/app/contracts/cars/car';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClientService: HttpClientService) { }

  async getAllCars(): Promise<Car[]> {
    const observable: Observable<Car[]> = this.httpClientService.get({
      controller: "car"
    });
    return await firstValueFrom(observable);
  }
}
