import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ShopComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
