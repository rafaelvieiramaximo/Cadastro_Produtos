import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  url = "http://localhost:3000/product/";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.url);
  }

  save(product: Product): Observable<Product> {

    return this.http.post<Product>(this.url, product)
  }

  delete(product:Product) : Observable<void>{
    return this.http.delete<void>(`${this.url}/${product.id}`)
  }

  update(product:Product) : Observable<Product>{
    return this.http.put<Product>(`${this.url}/${product.id}`, product)
  }
}
