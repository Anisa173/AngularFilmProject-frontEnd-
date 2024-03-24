import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Features/header/header.component';
import { FooterComponent } from './Features/footer/footer.component';
import { SideBarComponent } from './Features/side-bar/side-bar.component';
import { RecipesComponent } from './Features/mainComponent/recipes/recipes.component';
import { ShoppingComponent } from './Features/mainComponent/shopping/shopping.component';
import { RecipeBookComponent } from './Features/mainComponent/recipes/recipe-book/recipe-book.component';
import { RecipeListComponent } from './Features/mainComponent/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Features/mainComponent/recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './Features/mainComponent/shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Features/mainComponent/shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeItemComponent } from './Features/mainComponent/recipes/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SideBarComponent,
    RecipesComponent,
    ShoppingComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipeItemComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
