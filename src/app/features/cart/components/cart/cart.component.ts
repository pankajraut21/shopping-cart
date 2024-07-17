import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../../../core/services/cart.service';
import { IntegerOnlyDirective } from '../../directives/integer-only.directive';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IntegerOnlyDirective]
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
      if (!this.cartForm.contains(item.id.toString())) {
        const control = new FormControl(item.quantity || 0);
        control.valueChanges.subscribe(() => this.updateQuantity(item));
        this.cartForm.addControl(item.id.toString(), control);
      } else {
        this.cartForm.get(item.id.toString())?.setValue(item.quantity, { emitEvent: false });
      }
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
