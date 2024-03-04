import { Component } from '@angular/core';
import Highcharts from 'highcharts';

@Component({
  selector: 'app-fruit-highcharts',
  standalone: true,
  imports: [],
  templateUrl: './fruit-highcharts.component.html',
  styleUrl: './fruit-highcharts.component.scss'
})
export class FruitHighchartsComponent {
  private options = {};

  constructor() {}

  ngOnInit() {
    this.setOptions();
    this.renderDashboard();
  }

  private setOptions() {
    this.options = {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Fruit Consumption'
      },
      xAxis: {
          categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
          title: {
              text: 'Fruit eaten'
          }
      },
      series: [{
          name: 'Jane',
          data: [1, 0, 4]
      }, {
          name: 'John',
          data: [5, 7, 3]
      }]
  };
  }

  private renderDashboard() {
    Highcharts.chart('first-chart', this.options); 
  }
}
