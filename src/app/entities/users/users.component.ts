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
        this.fillUserObjects(this.users);
      }, (err) => {
        console.log(err);
      }
    );
  }

  private fillUserObjects(users) {
    this.fillPosts(users);
  }

  private fillPosts(users) {
    this.generalService.getPosts().subscribe(
      (posts) => {
        users.map(user => {
          user.posts = posts.filter(post => post['userId'] === user['id']);
        });
        this.fillAlbums(users);
      }, (err) => {
        console.log(err);
      }
    );
  }

  private fillAlbums(users) {
    this.generalService.getAlbums().subscribe(
      (albums) => {
        users.map(user => {
          user.albums = albums.filter(post => post['userId'] === user['id']);
        });
        this.fillPhotos(users);
      }, (err) => {
        console.log(err);
      }
    );
  }

  private fillPhotos(users) {
    this.generalService.getPhotos().subscribe(
      (photos) => {
        users.map(user => {
          user.photos = [];
          user['albums'].map(album => {
            user.photos = [...user.photos, ...photos.filter(photo => photo['albumId'] === album.id)];
          });
        });
      }, (err) => {
        console.log(err);
      }
    );
  }

}
