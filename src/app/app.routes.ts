import { Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import {LocationsComponent} from "./locations/locations.component";
import {FriendlistComponent} from "./friendlist/friendlist.component";
import {HomeComponent} from "./home/home.component";


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'friends', component: FriendlistComponent },
  { path: '**', redirectTo: ''}
];
