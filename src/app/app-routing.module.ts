import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailsComponent } from './components/users-details/users-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-list',
    pathMatch: 'full',
  },
  {
    path: 'users-list',
    component: UsersListComponent,
  },
  {
    path: 'users-details',
    component: UsersDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
