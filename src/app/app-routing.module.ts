import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shared/components/shop/shop.component';
import { CartComponent } from './shared/components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
export const appRoutes = routes; // Optional
