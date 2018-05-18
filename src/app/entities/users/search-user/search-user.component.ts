import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';
import { GeneralService } from '../../../services';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  users: Observable<any[]>;
  private searchTerms = new Subject();
  @Output() usersEmit = new EventEmitter();
  term;
  @Input() allUsers: any[];

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.fillUsers();
    this.users.subscribe(users => {
      console.log(users);
      // this.usersEmit.emit({users: users, term: this.term});
    }, err => {
      console.log(err);
      // this.usersEmit.emit({users: [], term: null});
    });
  }

  search(term: string): void {
    // Push a search term into the observable stream.
    this.term = term || null;
    this.searchTerms.next(term);
  }

  fillUsers() {
    this.users = this.searchTerms.pipe(
      debounceTime(300), // wait for 300ms pause in events
      distinctUntilChanged(), // ignore if next search term is same as previous
      switchMap(
        term =>
          term // switch to new observable each time
            ? // return the http search observable
            this.generalService.searchUser(term)
            : // or the observable of empty heroes if no search term
            of<any[]>([])
      ),
      catchError(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return of<any[]>([]);
      })
    );
  }

}
