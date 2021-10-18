import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map, takeWhile, takeUntil  } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-find-weather',
  templateUrl: './find-weather.component.html',
  styleUrls: ['./find-weather.component.css']
})
export class FindWeatherComponent implements OnInit {

  constructor(
    public readonly http: HttpClient
  ) { }

  dateTime: Observable<Date>;
  showError = false;
  inputValue = '';
  url: string;
  weatherData = {
    humidity: 0,
    pressure: 0,
    temperature: 0,
    name: ''
  };
  showWeather = false;
  componentDestroy = new Subject();

  ngOnInit() {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {
       return  new Date();
    }));
  }

  onFocusOut(e) {
    if (e.target.value) {
      this.inputValue = e.target.value;
      this.showError = false;
      this.weatherData = {
        humidity: 0,
        pressure: 0,
        temperature: 0,
        name: ''
      };
      this.url = `http://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&APPID=3a760a147d0c472f11869f5451b71dfe`;
      this.http.get(this.url)
      .pipe(
        takeWhile(() => this.inputValue !== null && this.inputValue !== ''),
        takeUntil(this.componentDestroy)
      ).subscribe((response: any) => {
        this.weatherData.humidity = response.main.humidity;
        this.weatherData.pressure = response.main.pressure;
        this.weatherData.temperature = response.main.temp;
        this.weatherData.name = response.name;
        this.showWeather = true;
      }, () => {
        this.showWeather = false;
        setTimeout(() => {
          this.showError = false;
          this.inputValue = '';
        }, 2000);
        this.showError = true;
      }
      );
    }
  }
}
