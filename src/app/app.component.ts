import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";

import {ProductService} from "./services/product.service";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'springular';

  products: IProduct[] = []

  constructor(public productsService: ProductService,
              public modalService: ModalService) {
  }
  ngOnInit(): void {
    this.productsService.findAll().subscribe(prods => {
      this.products = prods
    })
  }
}
