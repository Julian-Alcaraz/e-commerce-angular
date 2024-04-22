import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '@shared/models/product.model';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from "@shared/services/cart.service";
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductComponent,
    HeaderComponent,
    RouterLinkWithHref
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  private _cartService = inject(CartService);
  private _productService = inject(ProductService);
  private _categoryService = inject(CategoryService);
  @Input() category_id?: string;
  products= this._productService.products;
  cart = this._cartService.cart;
  categories= this._categoryService.categories;
  total = this._cartService.total;

  ngOnInit(){
    this.getProducts();
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
    const category_id = changes['category_id']
    if(category_id){
      this.getProducts()
    }
  }

  addCart(product:Product){
   this._cartService.addToCart(product)
  }

  getProducts(){
    this._productService.getProducts(this.category_id).subscribe({
      next: (products)=>{
        this.products.set(products)
      }
    })
  }

  getCategories(){
    this._categoryService.getAll().subscribe({
      next: (categories)=>{
        this.categories.set(categories)
      },
      error: (err)=> console.log(err)
    })
  }
}
