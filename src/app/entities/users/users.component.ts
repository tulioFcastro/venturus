import { Component, OnInit } from '@angular/core';
import {GeneralService} from '../../services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users;
  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.generalService.fetchUsers().subscribe(
      (users) => {
        this.users = users;
        this.fillPosts(this.users);
        this.fillAlbums(this.users);
        this.fillPhotos(this.users);
      }, (err) => {
        console.log(err);
      }
    );
  }

  private fillPosts(users) {
    this.generalService.getPosts().subscribe(
      (posts) => {
        users.map(user => {
          const qtt = posts.filter(post => post['userId'] === user['id']).length;
          user['quantityPosts'] = posts ? qtt : 0;
        });
      }, (err) => {
        console.log(err);
      }
    );
  }

  private fillAlbums(users) {
    this.generalService.getAlbums().subscribe(
      (albums) => {
        users.map(user => {
          const qtt = albums.filter(post => post['userId'] === user['id']).length;
          user['quantityAlbums'] = albums ? qtt : 0;
        });
      }, (err) => {
        console.log(err);
      }
    );
  }

  private fillPhotos(users) {
    this.generalService.getPhotos().subscribe(
      (photos) => {
        users.map(user => {
          const qtt = photos.filter(post => post['userId'] === user['id']).length;
          user['quantityPhotos'] = photos ? qtt : 0;
        });
      }, (err) => {
        console.log(err);
      }
    );
  }

}
