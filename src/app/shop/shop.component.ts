import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
