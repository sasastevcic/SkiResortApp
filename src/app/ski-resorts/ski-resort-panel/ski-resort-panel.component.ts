import { Component, OnInit, Input } from '@angular/core';
import { SkiResort } from '../model/ski-resort';

@Component({
  selector: 'ski-resort-panel',
  templateUrl: './ski-resort-panel.component.html',
  styleUrls: ['./ski-resort-panel.component.css']
})
export class SkiResortPanelComponent implements OnInit {
  @Input() skiResort: SkiResort;

  constructor() { }

  ngOnInit() {
  }

}
