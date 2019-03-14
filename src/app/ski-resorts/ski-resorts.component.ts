import { Component, OnInit } from '@angular/core';
import { SkiResortService } from './service/ski-resort.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SkiResort } from './model/ski-resort';
import { Track } from './model/track';
import { Weather } from './model/weather';
import { SkiPassPrice } from './model/ski-pass-price';

@Component({
  selector: 'ski-ski-resorts',
  templateUrl: './ski-resorts.component.html',
  styleUrls: ['./ski-resorts.component.css']
})
export class SkiResortsComponent implements OnInit {
  skiResort: SkiResort;
  tracks: Track[];
  weathers: Weather[];
  skipass: SkiPassPrice[];

  constructor(
    private ss: SkiResortService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      let id = +param['resortId'];

      forkJoin(
        this.ss.getSkiResorts(id),
        this.ss.getTracks(id),
        this.ss.getWeather(id),
        this.ss.getSkipass(id)
      ).subscribe(response => {
        this.skiResort = response[0];
        this.tracks = response[1];
        this.weathers = response[2];
        this.skipass = response[3];
      }, err => console.log('Error: ', err));
    });
  }

  updateSort(newSort) {
    this.ss.getTracks(this.skiResort._id, newSort).subscribe(data => this.tracks = data);
  }

  saveReservation(newReservation) {
    newReservation.mountain_id = this.skiResort._id;
    this.ss.postReservation(newReservation).subscribe(data => window.alert('Uspesna rezervacija'));
  }

}
