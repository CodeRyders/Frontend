import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import {LocationsComponent} from "./locations/locations.component";
import {FriendlistComponent} from "./friendlist/friendlist.component";


export const routes: Routes = [
  { path: 'shop', component: ShopComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'friends', component: FriendlistComponent },
  { path: '', redirectTo: '/shop', pathMatch: 'full' }
];
