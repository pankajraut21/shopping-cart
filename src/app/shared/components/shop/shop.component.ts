import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
})
export class ShopComponent implements OnInit {
  products$: Observable<Product[]> | undefined;

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
