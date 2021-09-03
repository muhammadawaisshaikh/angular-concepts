import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  singleSlot: any = {
    title: "Eloquent JavaScript",
    description: "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
  }

  multipleSlot: any = {
    image: "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "Eloquent JavaScript",
    description: "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    deliverTo: "Pakistan",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
