import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services';

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
        this.fillUserObjects();
      }, (err) => {
        console.log(err);
      }
    );
  }

  private fillUserObjects() {
    this.fillPosts();
  }

  private fillPosts() {
    this.generalService.getPosts().subscribe(
      (posts) => {
        this.users.map(user => {
          user.posts = posts.filter(post => post['userId'] === user['id']);
        });
        this.fillAlbums();
      }, (err) => {
        console.log(err);
      }
    );
  }

  private fillAlbums() {
    this.generalService.getAlbums().subscribe(
      (albums) => {
        this.users.map(user => {
          user.albums = albums.filter(post => post['userId'] === user['id']);
        });
        this.fillPhotos();
      }, (err) => {
        console.log(err);
      }
    );
  }

  private fillPhotos() {
    this.generalService.getPhotos().subscribe(
      (photos) => {
        this.users.map(user => {
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
