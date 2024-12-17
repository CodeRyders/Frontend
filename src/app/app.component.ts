import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ShopComponent } from "./shop/shop.component";
import  {FriendlistComponent } from "./friendlist/friendlist.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ShopComponent, FriendlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CodeRydersFE';
}
