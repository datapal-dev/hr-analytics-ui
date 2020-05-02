import { Component ,Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {TreeNode} from 'primeng/api';
@Component({
  selector: 'app-model-descrption',
  templateUrl: './model-descrption.component.html',
  styleUrls: ['./model-descrption.component.css']
})
export class ModelDescrptionComponent implements OnChanges {
   @Input() model_output: any = {};
   @Input() type: string = '';
   @Output('updateProbabilityThreshold') updateProbabilityThreshold = new EventEmitter<any>();
    chart : any = {};
    cols = [
        { field: 'columns', header: 'Columns' },
        { field: 'order', header: 'Order' }
    ];
    rankOder = [
    {columns: 'Name', order: 1},
    {columns: 'Age', order: 2},
    {columns: 'Sex', order: 3},
    ];
    tree_data: TreeNode[];
    probability_threshold: number = 0.5;
  constructor() { 
  }
  changeProb(){
      this.updateProbabilityThreshold.emit({ data: this.probability_threshold });
  }
  
  ngOnChanges() {
       this.draw();
  }
  draw(){
    if(this.model_output){
        this.probability_threshold = this.model_output.probability_threshold;
        this.chart = {
          chart: {
            type: this.model_output.roc_curve.type // area //column// line // scatter
          },
          title: {
            text: this.model_output.roc_curve.title
          },
          credits: {
            enabled: false
          },
          xAxis: {
              title: {
                  enabled: true,
                  text: this.model_output.roc_curve.x_title
              },
              min: 0, 
              max: 1
          },
          yAxis: {
              title: {
                  text: this.model_output.roc_curve.y_title
              },
              min: 0, 
              max: 1
          },
          legend: {
              enabled: true
          },
          tooltip: {
              headerFormat: this.model_output.roc_curve.x_title + ', '+ this.model_output.roc_curve.y_title+'<br/>',
              pointFormat: '<b>({point.x} , {point.y})</b>'
          },
          series: [
            {
              name: 'ROC Curve',
              data: this.model_output.roc_curve.values
            }
          ]
        };
        if(this.model_output.model_desc.type === 'tree' && this.type === 'train'){
        	this.processTreeData(this.model_output.model_desc.data);
        }
        if(this.model_output.model_desc.type === 'formula' && this.type === 'train'){
        	// process formula data
        }
      }
  }
  processTreeData(raw){
//     let raw = {
// 	"id": "0",
// 	"rule": "OverTime <= 0.5000",
// 	"gini": "0.27379180839",
// 	"samples": "2352",
// 	"value": [1967.0, 385.0],
// 	"left": {
// 		"id": "1",
// 		"rule": "TotalWorkingYears <= 2.5000",
// 		"gini": "0.189209515497",
// 		"samples": "1673",
// 		"value": [1496.0, 177.0],
// 		"left": {
// 			"id": "2",
// 			"rule": "None",
// 			"gini": "0.444444444444",
// 			"samples": "144",
// 			"value": [96.0, 48.0]
// 		},
// 		"right": {
// 			"id": "3",
// 			"rule": "StockOptionLevel <= 0.5000",
// 			"gini": "0.154501525125",
// 			"samples": "1529",
// 			"value": [1400.0, 129.0],
// 			"left": {
// 				"id": "4",
// 				"rule": "JobSatisfaction <= 1.5000",
// 				"gini": "0.229007489932",
// 				"samples": "652",
// 				"value": [566.0, 86.0],
// 				"left": {
// 					"id": "5",
// 					"rule": "None",
// 					"gini": "0.409061418685",
// 					"samples": "136",
// 					"value": [97.0, 39.0]
// 				},
// 				"right": {
// 					"id": "6",
// 					"rule": "JobInvolvement <= 2.5000",
// 					"gini": "0.165577489334",
// 					"samples": "516",
// 					"value": [469.0, 47.0],
// 					"left": {
// 						"id": "7",
// 						"rule": "None",
// 						"gini": "0.28382435729",
// 						"samples": "146",
// 						"value": [121.0, 25.0]
// 					},
// 					"right": {
// 						"id": "8",
// 						"rule": "None",
// 						"gini": "0.11184806428",
// 						"samples": "370",
// 						"value": [348.0, 22.0]
// 					}
// 				}
// 			},
// 			"right": {
// 				"id": "9",
// 				"rule": "RelationshipSatisfaction <= 3.5000",
// 				"gini": "0.093253537443",
// 				"samples": "877",
// 				"value": [834.0, 43.0],
// 				"left": {
// 					"id": "10",
// 					"rule": "YearsInCurrentRole <= 1.5000",
// 					"gini": "0.0624349635796",
// 					"samples": "651",
// 					"value": [630.0, 21.0],
// 					"left": {
// 						"id": "11",
// 						"rule": "None",
// 						"gini": "0.178413880992",
// 						"samples": "101",
// 						"value": [91.0, 10.0]
// 					},
// 					"right": {
// 						"id": "12",
// 						"rule": "None",
// 						"gini": "0.0392",
// 						"samples": "550",
// 						"value": [539.0, 11.0]
// 					}
// 				},
// 				"right": {
// 					"id": "13",
// 					"rule": "DailyRate <= 740.5000",
// 					"gini": "0.175738115749",
// 					"samples": "226",
// 					"value": [204.0, 22.0],
// 					"left": {
// 						"id": "14",
// 						"rule": "None",
// 						"gini": "0.257493622449",
// 						"samples": "112",
// 						"value": [95.0, 17.0]
// 					},
// 					"right": {
// 						"id": "15",
// 						"rule": "None",
// 						"gini": "0.0838719606033",
// 						"samples": "114",
// 						"value": [109.0, 5.0]
// 					}
// 				}
// 			}
// 		}
// 	},
// 	"right": {
// 		"id": "16",
// 		"rule": "MonthlyIncome <= 2475.0000",
// 		"gini": "0.424986064146",
// 		"samples": "679",
// 		"value": [471.0, 208.0],
// 		"left": {
// 			"id": "17",
// 			"rule": "None",
// 			"gini": "0.442495274102",
// 			"samples": "115",
// 			"value": [38.0, 77.0]
// 		},
// 		"right": {
// 			"id": "18",
// 			"rule": "StockOptionLevel <= 0.5000",
// 			"gini": "0.356640762537",
// 			"samples": "564",
// 			"value": [433.0, 131.0],
// 			"left": {
// 				"id": "19",
// 				"rule": "Age <= 35.5000",
// 				"gini": "0.469800344729",
// 				"samples": "236",
// 				"value": [147.0, 89.0],
// 				"left": {
// 					"id": "20",
// 					"rule": "None",
// 					"gini": "0.499384425977",
// 					"samples": "114",
// 					"value": [59.0, 55.0]
// 				},
// 				"right": {
// 					"id": "21",
// 					"rule": "None",
// 					"gini": "0.402042461704",
// 					"samples": "122",
// 					"value": [88.0, 34.0]
// 				}
// 			},
// 			"right": {
// 				"id": "22",
// 				"rule": "EnvironmentSatisfaction <= 2.5000",
// 				"gini": "0.223304580607",
// 				"samples": "328",
// 				"value": [286.0, 42.0],
// 				"left": {
// 					"id": "23",
// 					"rule": "None",
// 					"gini": "0.339800640797",
// 					"samples": "106",
// 					"value": [83.0, 23.0]
// 				},
// 				"right": {
// 					"id": "24",
// 					"rule": "DailyRate <= 729.5000",
// 					"gini": "0.156521386251",
// 					"samples": "222",
// 					"value": [203.0, 19.0],
// 					"left": {
// 						"id": "25",
// 						"rule": "None",
// 						"gini": "0.242969028124",
// 						"samples": "106",
// 						"value": [91.0, 15.0]
// 					},
// 					"right": {
// 						"id": "26",
// 						"rule": "None",
// 						"gini": "0.0665873959572",
// 						"samples": "116",
// 						"value": [112.0, 4.0]
// 					}
// 				}
// 			}
// 		}
// 	}
// };
    let res  = this.processObj(raw);
    
    this.tree_data = [];
    this.tree_data.push(res)
  }
  
  processObj(k){
	let res = {};
      let c = [];
    	if(k.hasOwnProperty('left')){
      	c.push(this.processObj(k.left));
      }
      if(k.hasOwnProperty('right')){
      	c.push(this.processObj(k.right));
      }
      if(c.length > 0){
      	res['children'] = c;
      	res['label'] = k.rule.split('=')[0] + ' ='+parseFloat(k.rule.split('=')[1]).toFixed(2) ;
      	res['sub_level'] =  'Sample size = ' + k['Sample size'].toString();
      	res['sub_level_l'] = 'Attrition rate = ' +k['Attrition Rate']+'%' ;
      // 	res['label'] = k.rule + ' Sample size =' + k['Sample size'].toString() + ' ' + 'Attrition rate = ' +k['Attrition Rate']+'%' ;
        res['styleClass'] = 'node';
        res['expanded'] = true;
        res['type'] = 'node';
      }else{
        res['label'] = k.rule.split('=')[0] + ' = '+parseFloat(k.rule.split('=')[1]).toFixed(2) ;
      	res['sub_level'] =  'Sample size =' + k['Sample size'].toString();
      	res['sub_level_l'] = 'Attrition rate = ' +k['Attrition Rate']+'%' ;
    		// res['label'] = k.rule + ' Sample size =' + k['Sample size'].toString() + ' ' + 'Attrition rate =' +k['Attrition Rate']+'%' ;
        res['type'] = 'leaf';
        // res = k.rule + ': ' + k.gini + ': ' + k.value.toString() ;
        res['styleClass'] = 'leaf';
    	}
      
      return res;
    }
}
