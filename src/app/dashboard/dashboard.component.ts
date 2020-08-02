import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { first } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

import { User } from 'src/app/_models';
import { UserService, AuthenticationService } from 'src/app/_services';
import { MultilevelNodes } from 'ng-material-multilevel-menu';
import { menu as CONSTANT } from '../constants';
import { Role } from '../role';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardAppComponent implements OnInit {

  // tslint:disable-next-line:member-ordering
  loading = false;
  // tslint:disable-next-line:member-ordering
  currentUser: User;
  // tslint:disable-next-line:member-ordering
  userFromApi: User;
  // tslint:disable-next-line:member-ordering
  result: MultilevelNodes[] = [];
  // tslint:disable-next-line:member-ordering
  menu: MultilevelNodes[] = CONSTANT.sidebarDemoLinks;
  // tslint:disable-next-line:member-ordering
  config = CONSTANT.sidebarConfigurations;
  // tslint:disable-next-line:member-ordering
  displayList = false;
  
  constructor(private userService: UserService,
              private authenticationService: AuthenticationService,
              private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private router: Router
              ) {

    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.currentUser = this.authenticationService.currentUserValue;

    setTimeout(() => {
      this.displayList = true;
    }, 100);
    iconRegistry.addSvgIcon(
      'psychology',
      sanitizer.bypassSecurityTrustResourceUrl('assets/psychology.svg'));

  }

  ngOnInit() {
    this.loading = true;
    this.menu = this.filterMenuItemsByUserRoles(this.menu);
    this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
      this.loading = false;
      this.userFromApi = user;
    });
    // this.refreshLastLogin();
  }

  filterMenuItemsByUserRoles(menu: any): MultilevelNodes[] {
    let outerArr = new Array();
    this.result = menu;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < menu.length; i++) {
      let item = menu[i];
      outerArr.push(item);
      this.setVisibilityOnItem(item.items);
    }

    let results1 = new Array();
    let results2 = new Array();
    let results3 = new Array();

    let counter = 0;

    menu.forEach(element => {
      // tslint:disable-next-line:prefer-const
      let elem = element.items.filter(o => o.visibility === true);
      if (elem.length > 0) {
        if (counter === 0) {
          results1.push(elem);
        } else if (counter === 1) {
          results2.push(elem);
        } else if (counter === 2) {
          results3.push(elem);
        }
      }
      counter++;
    });

    if (results1.length === 0) {
      outerArr[0].items = [];
    }
    if (results2.length === 0) {
      outerArr[1].items = [];
    }
    if (results3.length === 0) {
      outerArr[2].items = [];
    }
    this.result = outerArr;
    return this.result;
  }

  /* Intersection between two set
    const array1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'];
    const array2 = ['JUN'];

    let intersection = array1.filter(x => array2.includes(x)).length > 0;
    console.log(intersection);
  */

  setVisibilityOnItem(item: any) {
    let j = 0;
    while (j < item.length) {
      if (item[j].items) {
        this.setVisibilityOnItem(item[j].items);
      } else {
        if (item[j].roles.filter(x => this.currentUser.roles.includes(x)).length > 0) {
          item[j].visibility = true;
        } else {
          item[j].visibility = false;
        }
      }
      j++;
    }
  }

  selectedItem($event) {
    console.log($event);
  }

  selectedLabel($event) {
    console.log($event);
  }

  redirect(link) {
    this.router.navigate([link]);
    setTimeout(() => {
      this.displayList = true;
    }, 100);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
