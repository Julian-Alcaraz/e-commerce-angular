import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  @Input() id? :string;
  private productService = inject(ProductService)
  private cartService = inject(CartService)
   product= signal<Product|null>(null);
   cover= signal<String>("")
  ngOnInit(){
    if(this.id)[
      this.productService.getOne(this.id).subscribe({
          next: (product)=>{
            this.product.set(product); console.log(product.images[0])
            if(product.images.length){
              this.cover.set(product.images[0])
            }
          }
        }
      )
    ]
  }
  changeCover(newImage: string){
    this.cover.set(newImage);
  }
  addToCart(){
    const product = this.product()
    if(product){
      this.cartService.addToCart(product);
    }
  }
}
