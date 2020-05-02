import { Component ,Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  chart : any = {};
  @Input() chartObj: any = {};
  @Input() chartTypeList: any = {};
  chart_type: string = '';
  constructor() {
  }

  ngOnChanges() {
      this.draw();
  }
  draw(){
    if(this.chartObj){
        this.chart = new Chart(<any> this.chartObj);
      }
  }
  changeChart(){
    this.chartObj.chart.type = this.chart_type;
    this.draw();
  }
}
