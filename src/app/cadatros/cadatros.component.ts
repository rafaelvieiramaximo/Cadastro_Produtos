import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  isError: boolean = false

  constructor(private formBuider: FormBuilder, private service: ProductService) {

    this.formGroupProduct = formBuider.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      id: [''],
      description: ['',[Validators.minLength(10), Validators.required] ],
      price: ['',],
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
    if (this.formGroupProduct.valid) {
      if (this.isEditing) {
        this.service.update(this.formGroupProduct.value).subscribe({
          next: () => {
            this.loadProduct();
            this.isEditing = false;
            this.formGroupProduct.reset();
            this.isError = false
          }
        })
      }
      else {
        this.service.save(this.formGroupProduct.value).subscribe({
          next: data => this.products.push(data)
        });
        this.formGroupProduct.reset();
        this.isError = false
      }
    }else{
      this.isError = true
    }
  }
  delete(product: Product) {
    this.service.delete(product).subscribe({
      next: () => this.loadProduct()
    })
  }

  edit(product: Product) {
    this.formGroupProduct.setValue(product);
    this.isEditing = true;
  }

  get name(): any {
    return this.formGroupProduct.get("name")
  }

  get description(): any {
    return this.formGroupProduct.get("description")
  }
}
