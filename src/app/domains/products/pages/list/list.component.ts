import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

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
  products= signal<Product[]>([])
  cart= signal<Product[]>([])
  constructor(){
    const initProducts: Product[]= [
      {
        id: 4,
        title: "Prodcuto 1",
        price: 1000,
        image: 'https://picsum.photos/640/640?r=3',
        creationAt: new Date().toISOString()
      },
      {
        id: 3,
        title: "Prodcuto 2",
        price: 1000,
        image: 'https://picsum.photos/640/640?r=1',
        creationAt: new Date().toISOString()
      },
      {
        id: 2,
        title: "Prodcuto 3",
        price: 1000,
        image: 'https://picsum.photos/640/640?r=4',
        creationAt: new Date().toISOString()
      },
      {
        id: 1,
        title: "Prodcuto 4",
        price: 1000,
        image: 'https://picsum.photos/640/640?r=2',
        creationAt: new Date().toISOString()
      },
    ]
    this.products.set(initProducts)
  }
  addCart(product:Product){
    this.cart.update(prevState=> [...prevState, product])
  }
}
