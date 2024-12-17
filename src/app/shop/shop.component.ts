import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";

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

  constructor(private http: HttpClient) {}

  currentpoints : number = 120;



  buyitem(title: string) {
      this.http.post<String>('http://localhost:8080/api/users/knlSulQN5td1nfJ18zAbX3Cg2gk2/redeem?rewardName=' + title, "")
        .subscribe(data => {});

  }
}
