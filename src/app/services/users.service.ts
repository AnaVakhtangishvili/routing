import { Injectable } from '@angular/core';
import { default as usersListData } from '../../users-list.json'
import { default as usersDetailsData } from '../../users-details.json'
import { UserDetails, UserList } from '../models/users.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

constructor() { }

  getUsersList(): UserList[] {
    return usersListData;
  }

  getUserDetails(id: number): UserDetails {
    return usersDetailsData.find((element: UserDetails) => element.id === id);
  }

}
