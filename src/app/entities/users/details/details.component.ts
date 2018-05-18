import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../../../shared';
import { ActivatedRoute, Params } from '@angular/router';
import { GeneralService } from '../../../services';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class UserDetailsComponent implements OnInit {

  navigated = false; // true if navigated here
  userNotFound = false;
  constructor(private route: ActivatedRoute,
              private generalService: GeneralService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.generalService.getUserById(id).subscribe(
          (user) => {
            console.log(user);
            this.userNotFound = false;
          },
          (err) => {
            console.log(err);
            this.userNotFound = true;
          }
        );
        this.navigated = true;
      }
    });
  }

}
