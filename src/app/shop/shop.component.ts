import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatButton
  ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  activeLink = 'shop';

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
