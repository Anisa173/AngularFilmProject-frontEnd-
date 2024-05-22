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
import { UserComponent } from './Features/user/user.component';
import { HomepageComponent } from './Features/homepage/homepage.component';
import { FilmCategoriesComponent } from './Features/film-categories/film-categories.component';
import { FilmCategoryDetailsComponent } from './Features/film-categories/film-category-details/film-category-details.component';
import { FilmCategoryItemComponent } from './Features/film-categories/film-category-list/film-category-item/film-category-item.component';
import { FilmCategoryListComponent } from './Features/film-categories/film-category-list/film-category-list.component';
import { FilmsComponent } from './Features/films/films.component';
import { FilmDetailsComponent } from './Features/films/film-details/film-details.component';
import { FilmItemComponent } from './Features/films/film-list/film-item/film-item.component';
import { FilmListComponent } from './Features/films/film-list/film-list.component';
import { SubscribedFilmsComponent } from './Features/subscribed-films/subscribed-films.component';
import { SubscribedDetailsComponent } from './Features/subscribed-films/subscribed-details/subscribed-details.component';
import { SubscribedItemsComponent } from './Features/subscribed-films/subscribe-list/subscribed-items/subscribed-items.component';
import { SubscribeListComponent } from './Features/subscribed-films/subscribe-list/subscribe-list.component';
import { PaymentMethodsComponent } from './Features/payment-methods/payment-methods.component';
import { PayMethodDetailsComponent } from './Features/payment-methods/pay-method-details/pay-method-details.component';
import { PayMethodItemComponent } from './Features/payment-methods/pay-method-list/pay-method-item/pay-method-item.component';
import { PayMethodListComponent } from './Features/payment-methods/pay-method-list/pay-method-list.component';
import { CartItemComponent } from './Features/cart-item/cart-item.component';
import { CartItemDetailComponent } from './Features/cart-item/cart-item-detail/cart-item-detail.component';
import { CartItemListComponent } from './Features/cart-item/cart-item-list/cart-item-list.component';
import { CartComponent } from './Features/cart/cart.component';
import { CartDetailsComponent } from './Features/cart/cart-details/cart-details.component';
import { CartListComponent } from './Features/cart/cart-list/cart-list.component';
import { PaymentComponent } from './Features/payment/payment.component';
import { PaymentCardComponent } from './Features/payment/payment-card/payment-card.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: '/register', component: UserDetailsComponent },
      {
        path: '/update/:id',
        component: UserDetailsComponent,
        canActivate: [authGuard],
      },
      { path: ':id', component: UserItemComponent, canActivate: [authGuard] },
      {
        path: '/delete/:id',
        component: UserItemComponent,
        canActivate: [authGuard],
      },
      { path: '/all', component: UserListComponent, canActivate: [authGuard] },
      { path: '/login', component: UserLoginComponent },
    ],
  },
  { path: '', component: UserRoleComponent },
  { path: 'user/register', redirectTo: '/userRole', pathMatch: 'full' },
  { path: 'userRole', redirectTo: 'user/login', pathMatch: 'full' },
  { path: '', component: HomepageComponent },
  { path: '/auth/user/login', redirectTo: '/homePage', pathMatch: 'full' },
  { path: '', component: CustomerComponent },
  { path: 'user/:id', redirectTo: 'homepage', pathMatch: 'full' },
  { path: '', component: AdminComponent },
  { path: 'user/:id', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'user/delete/:id', redirectTo: 'homepage/admin', pathMatch: 'full' },
  { path: 'user/all', redirectTo: 'homepage/admin', pathMatch: 'full' },
  { path: '/all', redirectTo: '/homepage' },
  {
    path: 'FilmCategory',
    component: FilmCategoriesComponent,
    children: [
      { path: '/create', component: FilmCategoryDetailsComponent },
      {
        path: '/read/:id',
        component: FilmCategoryItemComponent,
      },
      {
        path: '/delete/:id',
        component: FilmCategoryItemComponent,
        canActivate: [authGuard],
      },
      {
        path: '/all',
        component: FilmCategoryListComponent,
        canActivate: [authGuard],
      },
    ],
  },
  { path: 'FilmCategory/create', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'FilmCategory/delete', redirectTo: '/admin', pathMatch: 'full' },
  {
    path: 'FilmCategory/read/:id',
    redirectTo: 'homepage/admin',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'FilmCategory/read/:id',
    redirectTo: 'homepage/customer',
    pathMatch: 'full',
  },
  {
    path: 'FilmCategory/all',
    redirectTo: 'homepage/admin',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: 'FilmCategory/all',
    redirectTo: 'homepage/customer',
    pathMatch: 'full',
  },
  {
    path: 'Films',
    component: FilmsComponent,
    children: [
      {
        path: '/create/:categoryId',
        component: FilmDetailsComponent,
        canActivate: [authGuard],
      },
      {
        path: '/update/:categoryId/:idFilm',
        component: FilmDetailsComponent,
        canActivate: [authGuard],
      },
      {
        path: '/delete/:categoryId/:filmId',
        component: FilmItemComponent,
        canActivate: [authGuard],
      },
      {
        path: '/:categoryId/:idFilm',
        component: FilmItemComponent,
        canActivate: [authGuard],
      },
      { path: '/free/:categoryId/:idFilm', component: FilmItemComponent },
      { path: '/paid/:categoryId/:idFilm', component: FilmItemComponent },
      { path: '/free/:categoryId', component: FilmListComponent },
      { path: '/paid/:categoryId', component: FilmListComponent },
      { path: '/:categoryId', component: FilmListComponent },
    ],
  },
  {
    path: '/delete/:categoryId/:filmId',
    redirectTo: '/admin',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: '/:categoryId/:idFilm',
    redirectTo: 'homepage/admin',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: '/free/:categoryId/:idFilm',
    redirectTo: 'homepage/admin',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: '/free/:categoryId/:idFilm',
    redirectTo: 'homepage/customer',
    pathMatch: 'full',
  },
  {
    path: '/paid/:categoryId/:idFilm',
    redirectTo: 'homepage',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: '/free/:categoryId/',
    redirectTo: 'homepage/admin',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: '/paid/:categoryId',
    redirectTo: 'homepage/admin',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: '/:categoryId',
    redirectTo: 'homepage/admin',
    pathMatch: 'full',
    canActivate: [authGuard],
  },

  {
    path: '/free/:categoryId/',
    redirectTo: 'homepage/customer',
    pathMatch: 'full',
  },
  {
    path: '/paid/:categoryId',
    redirectTo: 'homepage/customer',
    pathMatch: 'full',
  },
  {
    path: '/:categoryId',
    redirectTo: 'homepage/customer',
    pathMatch: 'full',
  },
  {
    path: 'subscribedFilm',
    component: SubscribedFilmsComponent,
    children: [
      {
        path: '/add/free/:userId/films',
        component: SubscribedDetailsComponent,
      },
      {
        path: '/add/paid/:userId/films',
        component: SubscribedDetailsComponent,
      },
      {
        path: '/read/:id/:idFilm',
        component: SubscribedItemsComponent,
        canActivate: [authGuard],
      },
      { path: '/read/free/:id/:idFilm', component: SubscribedItemsComponent },
      {
        path: '/read/paid/:id/:idFilm',
        component: SubscribedItemsComponent,
        canActivate: [authGuard],
      },
      { path: '/live/:id/:idFilm', component: SubscribedFilmsComponent },
      {
        path: '/read/all',
        component: SubscribeListComponent,
        canActivate: [authGuard],
      },
      { path: '/read/free/:id', component: SubscribeListComponent },
      {
        path: '/read/paid/:id',
        component: SubscribeListComponent,
        canActivate: [authGuard],
      },
      { path: 'reviews/:idFilm', component: SubscribeListComponent },
      { path: '/reviews/:id', component: SubscribeListComponent },
    ],
  },
  {
    path: '/add/free/:userId/films',
    redirectTo: '/customer',
    pathMatch: 'full',
  },
  {
    path: '/add/paid/:userId/films',
    redirectTo: '/customer',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: '/read/free/:id/:idFilm',
    redirectTo: '/customer',
    pathMatch: 'full',
  },
  {
    path: '/read/free/:id/:idFilm',
    redirectTo: '/admin',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  {
    path: '/live/:id/:idFilm',
    redirectTo: '/customer',
    pathMatch: 'full',
    canActivate: [authGuard],
  },
  { path: '/read/all', redirectTo: '/admin', pathMatch: 'full' },
  { path: '/read/free/:id', redirectTo: '/customer', pathMatch: 'full' },
  { path: '/read/paid/:id', redirectTo: '/customer', pathMatch: 'full' },
  { path: 'reviews/:idFilm', redirectTo: '/admin', pathMatch: 'full' },
  { path: '/reviews/:id', redirectTo: '/customer', pathMatch: 'full' },
  {
    path: 'CartItem',
    component: CartItemComponent,
    children: [
      { path: '/add', component: CartItemDetailComponent },
      { path: '/:ciId', component: CartItemDetailComponent },
      { path: '/all', component: CartItemListComponent },
    ],
  },
  {
    path: 'cart',
    component: CartComponent,
    children: [
      { path: '/:id/cartItem/paymentMethods', component: CartDetailsComponent },
      {
        path: '/:cartId/user.cartItem/paymentMethods',
        component: CartDetailsComponent,
      },
      { path: '/all', component: CartListComponent },
    ],
  },

  {
    path: 'paymentmethods',
    component: PaymentMethodsComponent,
    children: [
      {
        path: '/create',
        component: PayMethodDetailsComponent,
        canActivate: [authGuard],
      },
      {
        path: '/update/:pmId',
        component: PayMethodDetailsComponent,
        canActivate: [authGuard],
      },
      {
        path: '/read/:pmId',
        component: PayMethodItemComponent,
        canActivate: [authGuard],
      },
      {
        path: '/delete/:pmId',
        component: PayMethodItemComponent,
        canActivate: [authGuard],
      },
      {
        path: 'read/:id/paymentMethod',
        component: PayMethodItemComponent,
        canActivate: [authGuard],
      },
      {
        path: '/all',
        component: PayMethodListComponent,
        canActivate: [authGuard],
      },
    ],
  },
  { path: '/create', redirectTo: '/admin', pathMatch: 'full' },
  { path: '/update/:pmId', redirectTo: '/admin', pathMatch: 'full' },
  { path: '/delete/:pmId', redirectTo: '/admin', pathMatch: 'full' },
  { path: '/read/:pmId', redirectTo: '/admin', pathMatch: 'full' },
  {
    path: 'read/:id/paymentMethod',
    redirectTo: '/customer',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PaymentComponent,
    children: [
      {
        path: '/:id/paymentMethods/cart/cartItem',
        component: PaymentCardComponent,
      },
      { path: '/cartId', component: PaymentCardComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
];
//canActivate: [authGuard]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
