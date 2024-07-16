import { Component } from '@angular/core';
import { ShopComponent } from './shared/components/shop/shop.component';
import { CartComponent } from './shared/components/cart/cart.component';
import { CartService } from './shared/services/cart.service';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    ShopComponent,
    CartComponent
  ],
})
export class AppComponent {
    cartCount$ = this.cartService.cartCount$;

    constructor(private cartService: CartService) {}
  
    view: 'shop' | 'cart' = 'shop';

    showShop() {
        this.view = 'shop';
    }
    
    showCart() {
        this.view = 'cart';
    }
}
