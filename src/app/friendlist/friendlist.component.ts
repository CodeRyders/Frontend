import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http"; //Für Daten aus Backend

interface Friend {
  id: string;
}

@Component({
  selector: 'app-friendlist',
  standalone: true,
  imports: [],
  templateUrl: './friendlist.component.html',
  styleUrl: './friendlist.component.css'
})
export class FriendlistComponent implements OnInit{
  friends: Friend[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getFriends();
  }

  getFriends() {
    this.http.get<Friend[]>('http://localhost:8080/api/users/knlSulQN5td1nfJ18zAbX3Cg2gk2/friends ')
      .subscribe(data => {
        this.friends = data;
      });
  }
}
