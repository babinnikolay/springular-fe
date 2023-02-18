import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";

import {ProductService} from "./services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'springular';

  products: IProduct[] = []

  constructor(private productsService: ProductService) {
  }
  ngOnInit(): void {
    this.productsService.findAll().subscribe(products => {
      this.products = products
    })
  }
}
