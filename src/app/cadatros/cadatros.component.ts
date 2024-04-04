import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadatros',
  templateUrl: './cadatros.component.html',
  styleUrl: './cadatros.component.css'
})
export class CadatrosComponent implements OnInit {
  
  products: Product [] = [];

  formsGroupProduct : FormGroup | undefined;

  constructor(private  formBuider : FormBuilder){

    this.formsGroupProduct = formBuider.group({
    name : [''],
    id : [''],
    description : [''],
    price : [''],
    quantidade: [''],
    responsable: ['']
    })
  }
  
  ngOnInit(): void {
    this.loadProduct();
  }
  
  loadProduct(){

  }
    
}
