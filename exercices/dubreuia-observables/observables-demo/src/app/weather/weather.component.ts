import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

weather: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeather()
    .subscribe(
      values => this.weather = values["weather_state_name"],
      error => this.weather = error["error"]["message"],
     );

  }
  sendCity(city : string){
    
  }
}
