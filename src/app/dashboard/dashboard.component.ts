import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
