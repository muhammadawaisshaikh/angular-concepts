import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductListingComponent,
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
