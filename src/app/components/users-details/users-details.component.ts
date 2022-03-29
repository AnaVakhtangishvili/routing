import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetails } from 'src/app/models/users.models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {

  userDetails: UserDetails | undefined;

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.queryParamMap.get('id');
    this.userDetails = this.usersService.getUserDetails(Number(id));
    console.log(this.userDetails);
  }
}
