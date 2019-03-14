import { Component, OnInit } from '@angular/core';
import { SkiResortService } from 'src/app/ski-resorts/service/ski-resort.service';
import { SkiResortName } from 'src/app/ski-resorts/model/ski-resort-name';

@Component({
  selector: 'ski-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mountainNames: SkiResortName[];
  constructor(private ss: SkiResortService) { }

  ngOnInit() {
    this.ss.getNames().subscribe(data => this.mountainNames = data);
  }

}
