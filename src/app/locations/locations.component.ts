import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";

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
  imports: [CommonModule, MatCardModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css'
})
export class LocationsComponent implements OnInit  {
  locations: Location[] = [];

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
}
