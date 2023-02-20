import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {

  constructor(private productService: ProductService,
              private modalService: ModalService) {
  }

  form = new FormGroup({
    title: new FormControl<string>('')
  })

  submit(){
    this.productService.create({
      id: 0,
      description: this.form.value.title as string
    }).subscribe(() => {
      this.modalService.close()
    })
  }

}
