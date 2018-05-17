import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://jsonplaceholder.typicode.com';

  fetchUsers() {
    return this.http
      .get<any[]>(this.baseUrl + '/users')
      .pipe(map(data => data), catchError(this.handleError));
  }

  getUserById(id) {
    return this.http
      .get<any>(this.baseUrl + `/users/${id}`)
      .pipe(map(data => data), catchError(this.handleError));
  }

  getPosts() {
    return this.http
      .get<any[]>(this.baseUrl + `/posts`)
      .pipe(map(posts => posts), catchError(this.handleError));
  }

  getAlbums() {
    return this.http
      .get<any[]>(this.baseUrl + `/albums`)
      .pipe(map(posts => posts), catchError(this.handleError));
  }

  getPhotos() {
    return this.http
      .get<any[]>(this.baseUrl + `/photos`)
      .pipe(map(posts => posts), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }
}
