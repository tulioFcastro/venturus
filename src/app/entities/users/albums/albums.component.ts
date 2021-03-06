import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {GeneralService} from '../../../services';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {

  navigated = false; // true if navigated here
  userNotFound = false;
  user;
  constructor(private route: ActivatedRoute,
              private generalService: GeneralService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['userId'] !== undefined) {
        const id = +params['userId'];
        this.generalService.getUserById(id).subscribe(
          (user) => {
            this.user = user;
            this.fillAlbums();
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

  private fillAlbums() {
    this.generalService.getAlbumsByUserId(this.user['id']).subscribe(
      (data) => {
        data.map(album => {
          album['collapse'] = true;
        });
        this.user.albums = data;
        this.fillPhotos();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private fillPhotos() {
    this.user.albums.map(album => {
      album['photos'] = [];
      this.generalService.getPhotosByAlbumId(album.id).subscribe(
        (data) => {
          album['photos'] = [...album['photos'], ...data];
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  closeCollapsedDivs(actualAlbum) {
    this.user.albums
      .filter((album) => album.collapse === false && album.id !== actualAlbum.id)
      .map((u) => {
        u.collapse = true;
      });
    actualAlbum.collapse = !actualAlbum.collapse;
  }

}
