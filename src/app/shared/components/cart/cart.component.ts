import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCart();
    this.calculateTotalPrice();
  }

  updateQuantity(product: any, event: Event) {
    const quantity = Number((event.target as HTMLInputElement).value); // Convert to number
    if (quantity <= 0) {
      this.cartService.removeFromCart(product.id);
    } else {
      product.quantity = quantity;
      this.cartService.updateCart(product);
    }
    this.calculateTotalPrice();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.cartItems = this.cartService.getCart();
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }
}
