import { Component, OnInit , ViewChild} from '@angular/core';
import {HomeComponent} from './../home.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-data-prepration',
  templateUrl: './data-prepration.component.html',
  styleUrls: ['./data-prepration.component.css']
})
export class DataPreprationComponent implements OnInit {
  columns: Array<any> = [];
  haveData1: boolean = true;
  haveData2: boolean = true;
  cols: Array <any>= [];
  cars: Array <any>= [];
  selectionData: Array <any>= [];
  
  constructor(private home: HomeComponent, private router: Router) { }

  ngOnInit() {
  }
  colSel(d,h){
    this.columns= d.data;
    this.cols= [];
    for(let i = 0 ; i < d.fileData.cols.length; i++){
      this.cols.push({'header':d.fileData.cols[i]['name'],'field': d.fileData.cols[i]['key']})
    }
    this.cols = [...this.cols];
    this.cars= d.fileData.rows;

    this.haveData1=false;
    setTimeout(()=>{
      h.toggle('static-2')
    });
    // console.log(this.cars);
    // console.log(this.cols);
  }
  selectionEvent(d,a){
    this.selectionData = d.data;
    this.haveData1 = false;
    this.haveData2 = false;
    setTimeout(()=>{
    a.toggle('static-3')
    },100)
  }
  dashboard(d){
    //  here we have all cols, input , output, picked analysis data
    // move to another route based on selection
    this.home.userSelectionData = {
      user_choice : d.data,
      selection : this.selectionData
    };
    this.router.navigate(['home/dashboard/modeling']);
  }
}
