import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SkiResortName } from '../model/ski-resort-name';
import { Observable } from 'rxjs';
import { SkiResort } from '../model/ski-resort';
import { Track } from '../model/track';
import { Weather } from '../model/weather';
import { SkiPassPrice } from '../model/ski-pass-price';
import { Reservation } from '../model/reservation';

const baseUrl = 'http://localhost:3000/api/skiresorts';

@Injectable({
  providedIn: 'root'
})
export class SkiResortService {

  constructor(private http: HttpClient) { }

  getNames(): Observable<SkiResortName[]> {
    return this.http.get<Array<SkiResortName>>(baseUrl).pipe(map(response => {
      let retVal = new Array<SkiResortName>();
      response.forEach(elem => retVal.push(new SkiResortName(elem)));
      return retVal;
    }));
  }

  getSkiResorts(id: number): Observable<SkiResort> {
    return this.http.get(baseUrl + '/' + id).pipe(map(response => new SkiResort(response)));
  }

  getTracks(id: number, params?: any): Observable<Track[]> {
    let queryParams = {};

    if(params){
      queryParams = { params: new HttpParams()
        .set('sort', params.sort && params.sort.toString() || '')
      };
    }
    return this.http.get<Array<Track>>(baseUrl + '/' + id + '/tracks', queryParams).pipe(map(response => {
      let retVal = new Array<Track>();
      response.forEach(elem => retVal.push(new Track(elem)));
      return retVal;
    }));
  }


  getWeather(id: number): Observable<Weather[]> {
    return this.http.get<Array<Weather>>(baseUrl + '/' + id + '/weather').pipe(map(response => {
      let retVal = new Array<Weather>();
      response.forEach(elem => retVal.push(new Weather(elem)));
      return retVal;
    }));
  }


  getSkipass(id: number): Observable<SkiPassPrice[]> {
    return this.http.get<Array<SkiPassPrice>>(baseUrl + '/' + id + '/skipass').pipe(map(response => {
      let retVal = new Array<SkiPassPrice>();
      response.forEach(elem => retVal.push(new SkiPassPrice(elem)));
      return retVal;
    }));
  }

  postReservation(reservation: Reservation) {
    return this.http.post(baseUrl + '/' + reservation.mountain_id + '/skipass', reservation);
  }

}
