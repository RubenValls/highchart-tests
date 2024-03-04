import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FruitHighchartsComponent } from './charts/fruit-highcharts/fruit-highcharts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FruitHighchartsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'highcharts-tests';
  
}
