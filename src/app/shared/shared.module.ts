import { NgModule } from "@angular/core";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {TableModule} from 'primeng/table';
import {BlockUIModule} from 'primeng/blockui';
@NgModule({
  imports: [NgbModule.forRoot(),FormsModule,DropdownModule,TableModule,BlockUIModule],
  exports:[NgbModule,FormsModule,DropdownModule,TableModule,BlockUIModule]
})
export class SharedModule {}