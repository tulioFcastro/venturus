import { Component, OnInit } from '@angular/core';
import { slideToRight } from '../../../shared';
import { ActivatedRoute, Params } from '@angular/router';
import { GeneralService } from '../../../services';

@Component({
  selector: 'app-user-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  animations: [slideToRight()],
  host: {'[@slideToRight]': ''}
})
export class UserPostsComponent implements OnInit {

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
            this.fillPosts();
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

  private fillPosts() {
    this.generalService.getPostsByUserId(this.user['id']).subscribe(
      (data) => {
        data.map(post => {
          post['collapse'] = true;
        });
        this.user.posts = data;
        this.fillComment();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private fillComment() {
    this.user.posts.map(post => {
      post['comments'] = [];
      this.generalService.getCommentsByPostId(post.id).subscribe(
        (data) => {
          post['comments'] = [...post['comments'], ...data];
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  closeCollapsedDivs(actualPost) {
    this.user.posts
      .filter((post) => post.collapse === false && post.id !== actualPost.id)
      .map((u) => {
        u.collapse = true;
      });
    actualPost.collapse = !actualPost.collapse;
  }

}
