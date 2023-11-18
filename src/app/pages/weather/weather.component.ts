import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Weather } from 'src/app/models/Weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers$: Observable<Weather>[] = [];

  constructor(private weatherService: WeatherService) {}

  coordinates = [
    {
      lat: 3.05136,
      long: 101.62444,
      location: 'Puchong jaya',
      state: 'Selangor'
    }, {
      lat: 2.98284,
      long: 101.62377,
      location: 'Bukit puchong',
      state: 'Selangor'
    }, {
      lat: 2.92131,
      long: 101.65652,
      location: 'Cyberjaya',
      state: 'Selangor'
    }
  ]

  ngOnInit(): void {
    this.coordinates.forEach(coordinate => {
      this.weathers$?.push(this.weatherService.getWeather(coordinate.lat, coordinate.long).pipe(
        map((data) => {
          data.location = coordinate.location;
          data.state = coordinate.state;
          return data;
        })
      ));
    });
  }
  
  exceedCurrentTime(time: string) {
    let currentDate = new Date();
    let date = new Date(time);

    return date.getHours() >= currentDate.getHours();
  }
}