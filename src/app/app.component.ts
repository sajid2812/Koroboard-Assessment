import { Component } from '@angular/core';
import { dataArray } from 'src/assets/card-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cards = dataArray;
  title = 'koroboard';
}
