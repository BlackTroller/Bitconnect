import { APIService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Bitcoin Price' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#007bff',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private apiService: APIService) { }

  ngOnInit(): void {
    this.getBitcoinPriceDay();
    this.getBitcoinPriceWeek();
    this.getBitcoinPriceMonth();
    this.getBitcoinPriceYear();
    this.getBitcoinPriceAll();
  }

  getBitcoinPriceDay(){
    return this.apiService.getBitcoinPrice().subscribe(result=> {
      
    })
  }

  getBitcoinPriceWeek(){
    return this.apiService.getBitcoinPrice().subscribe(result=> {
      
    })
  }

  getBitcoinPriceMonth(){
    return this.apiService.getBitcoinPrice().subscribe(result=> {
      
    })
  }

  getBitcoinPriceYear(){
    return this.apiService.getBitcoinPrice().subscribe(result=> {
      
    })
  }

  getBitcoinPriceAll(){
    return this.apiService.getBitcoinPrice().subscribe(result=> {
      
    })
  }
}
