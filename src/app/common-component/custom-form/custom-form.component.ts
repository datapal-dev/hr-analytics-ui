import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  @Input() modalProp: any = {};
  search: string= '';
  @Output('save') save = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.modalProp ={
    show:false,
    ok:false,
    cancel:false,
    title:'',
    feilds: []
  }
  }
  okay() {
    this.modalProp.show = false;
    this.modalProp.cancel = false;
    this.save.emit({ data: this.modalProp.feilds });
  }
  cancel() {
    this.modalProp.show = false;
    this.modalProp.cancel = false;
    
  }

}
