import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListingComponent } from './product-listing/product-listing.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListingComponent,
  },
  {
    path: 'add-edit-product',
    component: AddEditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
