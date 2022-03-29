import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserList } from 'src/app/models/users.models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList: UserList[] = [];

  constructor(
    private usersService: UsersService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.usersList = this.usersService.getUsersList();
    console.log(this.usersList);
  }

  goToDetails({ id }: UserList) {
    this.router.navigate(['users-details'], {
      queryParams: {
        id: id,
      },
    });
  }
}
