import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductTypeMenuComponent } from './components/product-type-menu/product-type-menu.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchComponent } from './components/search/search.component';
import { ProductRankingComponent } from './components/product-ranking/product-ranking.component';

const routes: Routes = [
  {path: 'item-form/:id', component: ItemFormComponent},
  {path: 'item-form', component: ItemFormComponent},
  {path: 'item/:id', component: ProductDetailComponent},
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'type/:id', component: ProductListComponent},
  {path: 'ranking', component: ProductRankingComponent},
  {path: 'items', component: ProductListComponent},
  {path: '', redirectTo:'/items', pathMatch: 'full'},
  {path: '**', redirectTo:'/items', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ItemFormComponent,
    ProductTypeMenuComponent,
    NavBarComponent,
    SearchComponent,
    ProductRankingComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
