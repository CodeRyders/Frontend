import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-location-item',
  standalone: true,
  imports: [],
  templateUrl: './location-item.component.html',
  styleUrl: './location-item.component.css'
})
export class LocationItemComponent {
  @Input() location: any;
  @Input() isFavorite: boolean = false;
  @Output() toggleFavorite = new EventEmitter<any>();

  getImageForLocation(locationName: string): string {
    const imageMappings: { [key: string]: string } = {
      'DATEV ITC': 'itc.png',
      'DATEV CUBE': 'cube.jpg',
      'DATEV I': 'datev1.png',
      'DATEV II': 'datev2.png',
      'DATEV III': 'datev3.png',
      'DATEV IV': 'datev4.png',
    };

    // Default to 'house.jpg' if no specific mapping is found
    return imageMappings[locationName] || 'house.jpg';
  }

  onToggleFavorite() {
    this.toggleFavorite.emit(this.location);
  }
}
