import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadatros',
  templateUrl: './cadatros.component.html',
  styleUrl: './cadatros.component.css'
})
export class CadatrosComponent{
  
  products: Product [] = [];

  formGroupProduct : FormGroup;

  constructor(private  formBuider : FormBuilder){

    this.formGroupProduct = formBuider.group({
    name : [''],
    id : [''],
    description : [''],
    price : [''],
    quantidade: [''],
    responsable: ['']
    })
  }
  save(){
    this.products.push(this.formGroupProduct.value);
    this.formGroupProduct.reset();
  }
    
}
