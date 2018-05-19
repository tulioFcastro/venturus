import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services';
import { slideToRight } from '../../shared';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class UsersComponent implements OnInit {

  users;
  allUsers;

  constructor(private generalService: GeneralService) {
  }

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.generalService.getUsers().subscribe(
      (users) => {
        this.users = users;
        this.allUsers = users;
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
          this.fillUserRidersOnGroup(user);
          this.fillUserDaysOfWeek(user);
        },
        (err) => {
          console.log(err);
        }
      );
      // console.log(user);
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

  private fillUserRidersOnGroup(user) {
    this.generalService.getUsersRideOnGroupByUserId(user.id).subscribe(
      (data) => {
        this.generalService.getUsersRideOnGroupById(data[0].rideOnGroupId).subscribe(
          (rideOnGroup) => {
            user.rideOnGroup = rideOnGroup[0].description;
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private fillUserDaysOfWeek(user) {
    user.daysOfWeek = [];
    this.generalService.getUserDaysOfWeekByUserId(user.id).subscribe(
      (data) => {
        data.map(day => {
          this.generalService.getUserDaysOfWeekById(day.dayOfWeekId).subscribe(
            (daysOfWeek) => {
              user.daysOfWeek = [...user.daysOfWeek, ...daysOfWeek];
            },
            (err) => {
              console.log(err);
            }
          );
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }

  savedUser(user) {
    this.users.push(user);
  }

  removeUser(index) {
    this.users.splice(index, 1);
  }

  getUserDaysOfWeek(daysOfWeek) {
    if (daysOfWeek.length === 2) {
      if ((daysOfWeek[0].id === 1 && daysOfWeek[1].id === 7)
        || (daysOfWeek[0].id === 7 && daysOfWeek[1].id === 1)) {
        return 'Weekends';
      }
    } else if (daysOfWeek.length === 5) {
      let reduce = daysOfWeek.reduce((a, b) => {
        return {id: a.id + b.id};
      });
      console.log(reduce);
      if (reduce.id === 20) {
        return 'Week days';
      }
    } else if (daysOfWeek.length === 7) {
      return 'Every day';
    }
    let resp = '';
    daysOfWeek.map(day => {
      resp += day['value'] + ', ';
    });
    return resp.slice(0, resp.length - 2);
  }

}
