import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';


export const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
];
