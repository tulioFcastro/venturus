import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../../shared';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
