import {HttpClientModule} from "@angular/common/http";
import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CodeRydersFE';
}
