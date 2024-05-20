import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Features/page-not-found/page-not-found.component';
import { authGuard } from './Features/auth/auth.guard';
import { UserDetailsComponent } from './Features/user/user-details/user-details.component';
import { UserItemComponent } from './Features/user/user-list/user-item/user-item.component';
import { UserListComponent } from './Features/user/user-list/user-list.component';
import { UserLoginComponent } from './Features/user/user-login/user-login.component';
import { CustomerComponent } from './Features/customer/customer.component';
import { UserRoleComponent } from './Features/user-role/user-role.component';
import { AdminComponent } from './Features/admin/admin.component';

const routes: Routes = [
  {
    path: 'user/login',
    component: UserLoginComponent,
    canActivate: [authGuard],
  },
  { path: 'customer', component: CustomerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user/register', component: UserDetailsComponent },
  { path: 'userRole', component: UserRoleComponent },
  { path: '', redirectTo: '/user-role', pathMatch: 'full' },
  { path: 'user/update:id', component: UserDetailsComponent },
  { path: 'user/delete/{id}', component: UserItemComponent },
  { path: 'user/all', component: UserListComponent },
  { path: '/user/{id}', component: UserItemComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
