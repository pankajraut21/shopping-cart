import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class NavigationComponent {
  cartCount$ = this.cartService.cartCount$;

  constructor(private cartService: CartService, private router: Router) {}

  navigateToShop() {
    this.router.navigate(['/shop']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}
