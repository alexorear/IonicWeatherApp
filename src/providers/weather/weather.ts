import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apikey: string = 'b86f9085be1462b3';
  url: string;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/' + this.apikey + '/conditions/q/';
  }

  getWeather(city: string, state: string){
    return this.http.get(this.url + state + '/' + city + '.json')
      .map(result => result.json());
  }

}
