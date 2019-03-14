import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Track } from '../model/track';

@Component({
  selector: 'ski-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @Input() tracks: Track[];
  @Output() sort = new EventEmitter();

  sortCrit;

  constructor() { }

  ngOnInit() {
  }

  sortBy() {
    this.sort.emit({'sort': this.sortCrit});
  }

}
