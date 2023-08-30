import { Component, OnInit } from '@angular/core';
import { Product } from './add-edit-product-model';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit {

  product: Product = {};

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form submitted with values:', form.value);
    } else {
      console.log('Form is invalid');
    }
  }

}
