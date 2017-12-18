import { Component, OnInit } from '@angular/core';
import {USER_UNKNOWN, UserService} from '../services/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.isLoggedIn$ = this.userService.user$.map( usr => usr !== USER_UNKNOWN);
  }

  logout() {
  }

}
