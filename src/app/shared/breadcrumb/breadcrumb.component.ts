import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRouteSnapshot, NavigationEnd, RoutesRecognized} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  title;
  route;

  constructor(private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setUpData(this.router.routerState.snapshot.root);
      }
    });
  }

  private setUpData(routeSnapshot: ActivatedRouteSnapshot) {
    this.title = this.getPageTitle(routeSnapshot);
    this.route = this.getPageRoute(routeSnapshot);
    // this.canGoBack();
  }

  private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
    let title: string = (routeSnapshot.data && routeSnapshot.data['breadcrumb']) ? routeSnapshot.data['breadcrumb'] : 'cinemaApp';
    if (routeSnapshot.firstChild) {
      title = this.getPageTitle(routeSnapshot.firstChild) || title;
    }
    return title;
  }

  private getPageRoute(routeSnapshot: ActivatedRouteSnapshot) {
    let route: string = (routeSnapshot.data && routeSnapshot.data['breadcrumb']) ? routeSnapshot.data['breadcrumb'] : 'cinemaApp';
    if (routeSnapshot.firstChild) {
      route = this.getPageRoute(routeSnapshot.firstChild) || route;
    }
    return route;
  }

  back() {
    this.location.back();
  }

  // canGoBack() {
  //   if (this.route) this.translate.get(this.route).subscribe(data => this.canBack = data.includes('>'));
  // }
}
