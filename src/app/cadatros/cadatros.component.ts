import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cadatros',
  templateUrl: './cadatros.component.html',
  styleUrl: './cadatros.component.css'
})
export class CadatrosComponent implements OnInit {

  products: Product[] = [];

  formGroupProduct: FormGroup;

  isEditing: boolean = false;

  constructor(private formBuider: FormBuilder, private service: ProductService) {

    this.formGroupProduct = formBuider.group({
      name: [''],
      id: [''],
      description: [''],
      price: [''],
      quantidade: [''],
      responsable: ['']
    })
  }

  loadProduct() {
    this.service.getProducts().subscribe({
      next: data => this.products = data

    })
  }
  ngOnInit(): void {
    this.loadProduct();
  }
  save() {
    if (this.isEditing) {
      this.service.update(this.formGroupProduct.value).subscribe({
        next: () => {
          this.loadProduct();
          this.isEditing = false;
        }
      }
      )
    }
    else {
      this.service.save(this.formGroupProduct.value).subscribe({
        next: data => this.products.push(data)
      });
      this.formGroupProduct.reset();
    }
  }

  

}
