import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  cartForm: FormGroup;
  
  totalPrice$ = this.cartService.totalPrice$;

  constructor(private cartService: CartService) {
    this.cartForm = new FormGroup({});
  }

  ngOnInit() {
    this.loadCart();    
    this.cartService.cartCount$.subscribe(() => {
      this.loadCart();
    });
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.cartItems.forEach(item => {
        const control = new FormControl(item.quantity || 0);
        control.valueChanges.subscribe(() => this.updateQuantity(item));
        this.cartForm.addControl(item.id.toString(), control);
    });
  }

  updateQuantity(product: any) {
    const quantity = this.cartForm.get(product.id.toString())?.value || 0;
    product.quantity = quantity;
    this.cartService.updateCart(product);
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }
}
