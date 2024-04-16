import { Injectable, computed, signal } from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart= signal<Product[]>([])
  constructor() { }

  total= computed(()=>{
    const cart  = this.cart();
    return  cart.reduce((total, product)=>  total + product.price, 0 )
  })
  addToCart(product: Product){
    this.cart.update(state => [...state,product])
  }
  deleteFromCart(id: number){
    console.log(id)
    this.cart.update( (state)=>{
     return state.filter(producto => producto.id !== id)
    }
    );
  }
}
