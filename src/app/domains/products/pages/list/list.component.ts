import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from "@shared/services/cart.service";
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    HeaderComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private _cartService = inject(CartService);
  private _productService = inject(ProductService);


  products= this._productService.products;
  cart = this._cartService.cart;
  total = this._cartService.total;
  ngOnInit(){
    this._productService.getProducts().subscribe({
      next: (products)=>{
        this.products.set(products)
      }
    })
  }
  addCart(product:Product){
   this._cartService.addToCart(product)
  }
}
