import { Component, Input,  SimpleChanges , inject, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '@shared/services/cart.service';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent   {
  private _cartService = inject(CartService);

  hideSideMenu = signal(true);

  cart = this._cartService.cart;
  total = this._cartService.total;

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }

  deleteProduct(id:number){
    this._cartService.deleteFromCart(id)
  }

}
