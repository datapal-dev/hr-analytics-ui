import { Component, OnInit } from '@angular/core';
import {DataModelingService} from './data-modeling.service';
import {HomeComponent} from './../../home.component';
import {AppComponent} from './../../../app.component';
import { _ } from 'underscore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-data-modeling',
  templateUrl: './data-modeling.component.html',
  styleUrls: ['./data-modeling.component.css'],
  providers: [DataModelingService]
})
export class DataModelingComponent implements OnInit {
  modelOption : any = [];
  selModel: any;
  formModelObj: any;
  train_data: any;
  test_data: any;
  show: boolean = false;
  custom: any = [];
  probability_threshold: number = 0.5;
  constructor(private service: DataModelingService, private home: HomeComponent, private app:AppComponent, private router:Router) {
    this.modelOption = [
        {label:'Select Model', value:null},
        {label:'Logistic Regression', value: 'logistic_regression'},
        {label:'Decision Tree', value: 'decision_tree'},
        {label:'Random Forest', value: 'random_forest'},
        {label:'XG Boost', value: 'xg_boost'},
        {label:'Neural Network', value: 'neural_netwrok'}
    ];
    this.selModel = 'decision_tree'; 
  }
  
  ngOnInit() {
    if(this.home.userSelectionData){
    this.buildModel();
    }else{
      this.app.showInfo('No data selected. Please upload new data.');
      this.router.navigate(['home/new']);
    }
  }
  updateProb(e){
    this.probability_threshold = e.data;
    this.buildModel();
  }
  openCustomized(){
    let f = [];
    if(this.selModel === 'logistic_regression'){
      // form for logistic regression
      f = [
        {label: 'Data Split' , type: 'range', name: 'data_split', val: 60},
        {label: 'CV Fold' , type: 'number', name: 'cv_fold', val: 6},
        {label: 'VIF' , type: 'number',  name: 'vif', val: 5},
        {label: 'L1 Regularization' , type: 'number', name: 'l1_regularization', val: 5},
        {label: 'L2 Regularization' , type: 'number', name: 'l1_regularization', val: 4},
      ];
    }else if(this.selModel === 'decision_tree'){
      // form for logistic regression
      f = [
        {label: 'Data Split' , type: 'range', name: 'data_split', val: 60},
        {label: 'CV Fold' , type: 'number', name: 'cv_fold', val: 3},
        {label: 'Data in Leaf Node' , type: 'number',  name: 'leaf_node', val: 6},
        {label: 'Data at each node (Split)' , type: 'number', name: 'split_node', val: 5},
        {label: 'Cost Comlexity' , type: 'number', name: 'cost_complexity', val: 4},
      ];
    }
    this.formModelObj = {
      show:true,
      ok:true,
      cancel: true,
      title: 'Customized Your Model',
      feilds : f
    };
  }
  customData(e){
    this.custom = [];
    _.each(e.data,(k)=> this.custom.push(_.pick(k,'name','val')));
  }
  buildModel(){
    let req =  {
      input: Array.from(this.home.userSelectionData.selection.input.values()), 
      output: Array.from(this.home.userSelectionData.selection.output.values())[0], 
      model: this.selModel,
      custom:this.custom,
      probability_threshold: this.probability_threshold
    };
    this.show = false;
    // do something with service
    this.app.loading(true);
    this.service.build(req)
    .subscribe(
            data => { 
              this.app.loading(false);
            if(data.status === 'true'){
                this.app.showSuccess(data.msg);
                this.showResult(data.data);
              }else{
                this.app.showError(data.msg);
              }
            },
            error => {
              this.app.loading(true);
              this.app.showError(error)
            }
        );
    // this.showResult({});
  }
  showResult(res){
    this.show = true;
    this.train_data = res.train_data;
    this.train_data.probability_threshold = this.probability_threshold;
    this.test_data =  res.test_data;
    this.test_data.probability_threshold = this.probability_threshold;
    // rounding for test data */ 
    this.test_data.true_positive_rate =  (parseFloat(this.test_data.true_positive_rate)*100).toFixed(2)+ '%';
    this.test_data.false_positive_rate =  (parseFloat(this.test_data.false_positive_rate)*100).toFixed(2)+ '%';
    this.test_data.precision =  (parseFloat(this.test_data.precision)*100).toFixed(2)+ '%';
    this.test_data.recall =  (parseFloat(this.test_data.recall)*100).toFixed(2)+ '%';
    this.test_data.f_score =  (parseFloat(this.test_data.f_score)*100).toFixed(2)+ '%';
    
    /* rouding for train data */ 
    
    this.train_data.true_positive_rate =  (parseFloat(this.train_data.true_positive_rate)*100).toFixed(2)+ '%';
    this.train_data.false_positive_rate =  (parseFloat(this.train_data.false_positive_rate)*100).toFixed(2)+ '%';
    this.train_data.precision =  (parseFloat(this.train_data.precision)*100).toFixed(2)+ '%';
    this.train_data.recall =  (parseFloat(this.train_data.recall)*100).toFixed(2)+ '%';
    this.train_data.f_score =  (parseFloat(this.train_data.f_score)*100).toFixed(2)+ '%';
  }
}
