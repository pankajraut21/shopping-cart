import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './features/product/components/shop/shop.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { CartService } from './core/services/cart.service';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HomeComponent,
    ShopComponent,
    CartComponent
  ],
})
export class AppComponent {
    view: 'shop' | 'cart' = 'shop';
    cartCount$ = this.cartService.cartCount$;

    constructor(private cartService: CartService) {}
  
    displayShop() {
        this.view = 'shop';
    }
    
    displayCart() {
        this.view = 'cart';
    }
}
