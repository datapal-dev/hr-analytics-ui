import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-analysis-options',
  templateUrl: './analysis-options.component.html',
  styleUrls: ['./analysis-options.component.css']
})
export class AnalysisOptionsComponent implements OnInit {
  @Output('picked') picked = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  start(a){
      this.picked.emit({ data: a});
  }
}
