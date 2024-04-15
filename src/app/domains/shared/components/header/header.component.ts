import { Component, Input, ViewChild, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({required:true}) cart: Product[]=[];

  hideSideMenu = signal(true);

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }

  calculteTotal(){
    var total=0;
    this.cart.map((product)=> total= total+ product.price )
    return total
  }


  deleteProduct(id:number){
    // los borra pero no de list component
    this.cart = this.cart.filter((product)=> product.id != id )
  }
}
