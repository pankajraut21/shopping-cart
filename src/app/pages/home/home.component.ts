import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class HomeComponent {
  @Input() view: string = 'shop';

  showShop() {
    this.view = 'shop';
  }

  showCart() {
    this.view = 'cart';
  }
}
