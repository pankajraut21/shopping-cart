import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  @Input() view: string = 'shop';

  showShop() {
    this.view = 'shop';
  }

  showCart() {
    this.view = 'cart';
  }
}
