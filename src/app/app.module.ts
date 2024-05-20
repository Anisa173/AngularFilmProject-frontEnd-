import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthModule } from './Features/auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgxStripeModule } from 'ngx-stripe';
import { HeaderComponent } from './Features/header/header.component';
import { UserComponent } from './Features/user/user.component';
import { UserService } from './Shared/services/user.service';
import { AuthService } from './Shared/services/auth.service';
import { FilmService } from './Shared/services/film.service';
import { FilmCategoryService } from './Shared/services/film-category.service';
import { SubscribedFilmsService } from './Shared/services/subscribed-films.service';
import { ActorsService } from './Shared/services/actors.service';
import { CartItemService } from './Shared/services/cart-item.service';
import { CartService } from './Shared/services/cart.service';
import { UserListComponent } from './Features/user/user-list/user-list.component';
import { UserItemComponent } from './Features/user/user-list/user-item/user-item.component';
import { UserDetailsComponent } from './Features/user/user-details/user-details.component';
import { UserLoginComponent } from './Features/user/user-login/user-login.component';
import { PageNotFoundComponent } from './Features/page-not-found/page-not-found.component';
import { AuthInterceptor } from './Shared/interceptors/auth.interceptor';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandlerInterceptor } from './Shared/interceptors/app-error-handler.interceptor';
import { CustomerComponent } from './Features/customer/customer.component';
import { FilmCategoriesComponent } from './Features/film-categories/film-categories.component';
import { FilmCategoryListComponent } from './Features/film-categories/film-category-list/film-category-list.component';
import { FilmCategoryItemComponent } from './Features/film-categories/film-category-list/film-category-item/film-category-item.component';
import { FilmCategoryDetailsComponent } from './Features/film-categories/film-category-details/film-category-details.component';
import { FilmsComponent } from './Features/films/films.component';
import { FilmListComponent } from './Features/films/film-list/film-list.component';
import { FilmItemComponent } from './Features/films/film-list/film-item/film-item.component';
import { FilmDetailsComponent } from './Features/films/film-details/film-details.component';
import { ActorsComponent } from './Features/actors/actors.component';
import { ActorListComponent } from './Features/actors/actor-list/actor-list.component';
import { ActorItemComponent } from './Features/actors/actor-list/actor-item/actor-item.component';
import { ActorDetailsComponent } from './Features/actors/actor-details/actor-details.component';
import { UserRoleComponent } from './Features/user-role/user-role.component';
import { AdminComponent } from './Features/admin/admin.component';

import { SubscribedDetailsComponent } from './Features/subscribed-films/subscribed-details/subscribed-details.component';
import { SubscribeListComponent } from './Features/subscribed-films/subscribe-list/subscribe-list.component';
import { SubscribedItemsComponent } from './Features/subscribed-films/subscribe-list/subscribed-items/subscribed-items.component';
import { SubscribedFilmsComponent } from './Features/subscribed-films/subscribed-films.component';
import { PayMethodDetailsComponent } from './Features/payment-methods/pay-method-details/pay-method-details.component';
import { PayMethodItemComponent } from './Features/payment-methods/pay-method-list/pay-method-item/pay-method-item.component';
import { PayMethodListComponent } from './Features/payment-methods/pay-method-list/pay-method-list.component';
import { PaymentMethodsComponent } from './Features/payment-methods/payment-methods.component';
import { PaymentComponent } from './Features/payment/payment.component';
import { CartItemDetailComponent } from './Features/cart-item/cart-item-detail/cart-item-detail.component';
import { CartItemListComponent } from './Features/cart-item/cart-item-list/cart-item-list.component';
import { CartItemComponent } from './Features/cart-item/cart-item.component';
import { CartComponent } from './Features/cart/cart.component';
import { CartDetailsComponent } from './Features/cart/cart-details/cart-details.component';
import { CartListComponent } from './Features/cart/cart-list/cart-list.component';
import { PaymentCardComponent } from './Features/payment/payment-card/payment-card.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    UserLoginComponent,
    UserListComponent,
    UserItemComponent,
    UserDetailsComponent,
    PageNotFoundComponent,
    CartDetailsComponent,
    CustomerComponent,
    FilmCategoriesComponent,
    FilmCategoryListComponent,
    FilmCategoryItemComponent,
    FilmCategoryDetailsComponent,
    FilmsComponent,
    FilmListComponent,
    FilmItemComponent,
    FilmDetailsComponent,
    ActorItemComponent,
    ActorsComponent,
    ActorListComponent,
    ActorDetailsComponent,
    UserRoleComponent,
    AdminComponent,
    CustomerComponent,
    SubscribedFilmsComponent,
    SubscribedDetailsComponent,
    SubscribeListComponent,
    SubscribedItemsComponent,
    PaymentMethodsComponent,
    PayMethodDetailsComponent,
    PayMethodItemComponent,
    PayMethodListComponent,
    PaymentComponent,
    CartItemComponent,
    CartItemDetailComponent,
    CartItemListComponent,
    CartComponent,
    CartListComponent,
    PaymentCardComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    NgxStripeModule,
  ],
  providers: [
    UserService,
    AuthService,
    FilmService,
    SubscribedFilmsService,
    CartItemService,
    CartService,
    FilmCategoryService,
    ActorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: ErrorHandler, useClass: AppErrorHandlerInterceptor },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
