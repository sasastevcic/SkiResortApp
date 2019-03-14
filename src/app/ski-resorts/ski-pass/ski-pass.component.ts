import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SkiPassPrice } from '../model/ski-pass-price';
import { Reservation } from '../model/reservation';

@Component({
  selector: 'ski-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.css']
})
export class SkiPassComponent implements OnInit {
  @Input() skipass: SkiPassPrice[];
  @Output() reserve = new EventEmitter();
  reservation: Reservation = new Reservation();
  constructor() { }

  ngOnInit() {
  }

  calculateDate() {
    if(this.reservation.from && this.reservation.to){
      let diffDays = this.reservation.calculateDateDifference();

      for(let i in this.skipass){
        if(this.skipass[i].duration == diffDays){
          this.reservation.price = this.skipass[i].price;
          break;
        }
      }
    }
  }

  submit() {
    this.reserve.emit(this.reservation);
    this.reservation = new Reservation();
  }
}
