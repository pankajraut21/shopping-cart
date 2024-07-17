import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CartItem } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartCountSubject = new BehaviorSubject<number>(0);
  private totalPriceSubject = new BehaviorSubject<number>(0);

  cartCount$ = this.cartCountSubject.asObservable();
  totalPrice$ = this.totalPriceSubject.asObservable();

  addToCart(product: CartItem) {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
    this.updateCartCount();
    this.updateTotalPrice();
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.updateCartCount();
    this.updateTotalPrice();
  }

  updateCart(product: CartItem) {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = product.quantity;
    }
    this.updateCartCount();
    this.updateTotalPrice();
  }

  getCart() {
    return this.cartItems;
  }

  private updateCartCount() {
    this.cartCountSubject.next(this.cartItems.length);
  }

  private updateTotalPrice() {
    const totalPrice = this.cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);
    this.totalPriceSubject.next(totalPrice);
  }
}
