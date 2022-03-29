export interface UserList {
  id: number;
  username: string;
}

export type UserDetails = UserList & {
  firstName: string;
  lastName: string;
  aboutMe: string;
};