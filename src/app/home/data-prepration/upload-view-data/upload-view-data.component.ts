import { Component, OnInit , EventEmitter, Output, Input,
  OnChanges} from '@angular/core';
import { _ } from 'underscore';
import * as $ from 'jquery';
import {UploadViewDataService} from './upload-view-data.service';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-upload-view-data',
  templateUrl: './upload-view-data.component.html',
  styleUrls: ['./upload-view-data.component.css'],
  providers: [UploadViewDataService]
})
export class UploadViewDataComponent implements OnChanges {
  @Output('next') next = new EventEmitter<any>();
  public fileData: Array<any> = [];
  public canNext: Boolean = true;
  fileName: string = '';
  name: string = '';
  res : any;
  constructor(private service: UploadViewDataService, private app:AppComponent) {}

  ngOnChanges() {
    this.name = '';
    this.fileName = '';
    this.canNext = true;
  }

  fileUploaded(fileData: any) {
    let targetData: DataTransfer = <DataTransfer>fileData.target;
    if(targetData.files.length > 0) {
        let file = fileData.target.files[0];
        this.app.loading(true);
        this.service.uploadFile(file)
        .subscribe(
                data => { 
                this.app.showSuccess(data.msg);
                this.app.loading(false);
                  if(data.status){
                      this.canNext = false;
                      this.res = data;
                  }else{
                      this.canNext = true;
                  }
                },
                error => {
                  this.app.loading(false);
                  this.app.showError(error)
                }
            );
    }else{
      this.app.showSuccess('No file selected');
    }
    
  }
  nextGo() {
    this.next.emit({ data: this.res.data , fileData:this.res.fileData});
  }
}
