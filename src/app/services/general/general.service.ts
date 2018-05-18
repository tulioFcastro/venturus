import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'https://jsonplaceholder.typicode.com';
  private fakeServiceUrl = 'https://venturos.herokuapp.com';

  getUsers() {
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

  getPostsByUserId(userId) {
    return this.http
      .get<any[]>(this.baseUrl + `/posts?userId=${userId}`)
      .pipe(map(posts => posts), catchError(this.handleError));
  }

  getAlbums() {
    return this.http
      .get<any[]>(this.baseUrl + `/albums`)
      .pipe(map(posts => posts), catchError(this.handleError));
  }

  getAlbumsByUserId(userId) {
    return this.http
      .get<any[]>(this.baseUrl + `/albums?userId=${userId}`)
      .pipe(map(posts => posts), catchError(this.handleError));
  }

  getPhotos() {
    return this.http
      .get<any[]>(this.baseUrl + `/photos`)
      .pipe(map(posts => posts), catchError(this.handleError));
  }

  getPhotosByAlbumId(albumId) {
    return this.http
      .get<any[]>(this.baseUrl + `/photos?albumId=${albumId}`)
      .pipe(map(posts => posts), catchError(this.handleError));
  }

  getDaysOfWeek() {
    return this.http
      .get<any[]>(this.fakeServiceUrl + `/daysofweek`)
      .pipe(map(posts => posts), catchError(this.handleError));
  }

  getRideOnGroupOptions() {
    return this.http
      .get<any[]>(this.fakeServiceUrl + `/rideongroup`)
      .pipe(map(posts => posts), catchError(this.handleError));
  }

  searchUser(term): Observable<any[]> {
    console.log(`${this.baseUrl}/users?name=${term}`);
    return this.http
      .get<any[]>(`${this.baseUrl}/users?username=${term}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse) {
    console.error(res.error);
    return observableThrowError(res.error || 'Server error');
  }

}
