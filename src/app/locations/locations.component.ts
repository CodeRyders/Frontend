import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatToolbar} from "@angular/material/toolbar";
import {MatTab, MatTabGroup, MatTabLink} from "@angular/material/tabs";
import {MatIcon} from "@angular/material/icon";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {MatButton} from "@angular/material/button";

interface Location {
  id: string;
  name: string;
  hausnummer: string;
  strasse: string;
  plz: string;
  ort: string;
  laengeKoordinaten: number;
  breiteKoordinaten: number;
}

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatToolbar, MatTabGroup, MatTab, MatIcon, RouterLinkActive, RouterLink, MatTabLink, MatButton],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];
  favorites: Location[] = [];
  activeLink = 'locations';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLocations();
  }

  getLocations() {
    this.http.get<Location[]>('http://localhost:8080/api/locations')
      .subscribe(data => {
        this.locations = data;
      });
  }

  toggleFavorite(location: Location) {
    const index = this.favorites.findIndex(l => l.id === location.id);
    if (index === -1) {
      this.favorites.push(location);
    } else {
      this.favorites.splice(index, 1);
    }
  }

  isFavorite(location: Location) {
    return this.favorites.some(l => l.id === location.id);
  }

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}
