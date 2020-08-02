import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductTypeMenuComponent } from './components/product-type-menu/product-type-menu.component';

const routes: Routes = [
  {path: 'new-item', component: AddProductComponent},
  {path: 'items/:id', component: ProductDetailComponent},
  {path: 'items/type/:id', component: ProductListComponent},
  {path: 'items', component: ProductListComponent},
  {path: '', redirectTo:'/items', pathMatch: 'full'},
  {path: '**', redirectTo:'/items', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    AddProductComponent,
    ProductTypeMenuComponent
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
