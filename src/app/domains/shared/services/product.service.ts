import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient)
  products= signal<Product[]>([]);
  constructor() { }
  getProducts(){
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products');

  }
}
