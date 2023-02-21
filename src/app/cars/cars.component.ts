import { Component, Input, OnInit } from '@angular/core';
import { Car } from 'src/app/contracts/cars/car';
import { CarService } from 'src/app/services/models/car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  opened: boolean
  constructor(private carService: CarService) { }
  cars: Car[];
  async ngOnInit() {
    this.cars = await this.getCars();
    console.log(this.cars);
  }

  async getCars(): Promise<Car[]> {
    return await this.carService.getAllCars();
  }

}
