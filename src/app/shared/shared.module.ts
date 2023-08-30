import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductCardComponent,
    FormsModule
  ],
})
export class SharedModule { }
