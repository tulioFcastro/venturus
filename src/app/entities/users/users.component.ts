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
    this.generalService.getUsers().subscribe(
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
    this.users.map(user => {
      this.generalService.getPostsByUserId(user['id']).subscribe(
        (data) => {
          user.posts = data;
          this.fillAlbums(user);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  private fillAlbums(user) {
    this.generalService.getAlbumsByUserId(user['id']).subscribe(
      (data) => {
        user.albums = data;
        this.fillPhotos(user);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private fillPhotos(user) {
    user.photos = [];
    user.albums.map(album => {
      this.generalService.getPhotosByAlbumId(album['id']).subscribe(
        (data) => {
          user.photos = [...user.photos, ...data];
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  savedUser(user) {
    this.users.push(user);
  }

}
