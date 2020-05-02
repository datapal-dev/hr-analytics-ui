import {
  Component,
  OnChanges,
  EventEmitter,
  Input,
  Output
} from "@angular/core";
import { _ } from "underscore";
@Component({
  selector: "app-column-selection",
  templateUrl: "./column-selection.component.html",
  styleUrls: ["./column-selection.component.css"]
})
export class ColumnSelectionComponent implements OnChanges {
  @Input()
  columns: Array<any> = [];
  @Input()
  colTypeList: Array<any> = [];
  @Output("selection")
  selection = new EventEmitter<any>();
  input = new Set();
  output = new Set();
  search: string = "";
  allCol: any = [];
  draggedObj: any;
  constructor() {
    this.colTypeList = [
      { label: "Numeric", value: "numerical" },
      { label: "Categoric", value: "categorical" },
      { label: "Ordinal", value: "ordinal" }
    ];
  }

  ngOnChanges() {
    this.sortCol();
    this.allCol = _.clone(this.columns);
  }
  sortCol() {
    this.columns = _.sortBy(this.columns, "colName");
  }
  filter() {
    if (this.search === "") {
      this.columns = _.sortBy(this.allCol, "colName");
    } else {
      this.columns = _.clone(
        this.allCol.filter(e => {
          return (
            e.colName.toLowerCase().indexOf(this.search.toLowerCase()) === 0
          );
        })
      );
    }
  }
  selectAllToInput() {
    _.each(this.columns, e => {
      this.input.add(e);
    });
    this.columns = [];
  }
  next() {
    let o = {
      col: this.allCol,
      input: this.input,
      output: this.output
    };
    if (this.selection.emit) {
      this.selection.emit({ data: o });
    }
  }
  dragStart(event, a) {
    this.draggedObj = a;
  }

  dropInput(event) {
    if (this.draggedObj) {
      if (!this.output.has(this.draggedObj)) {
        this.input.add(this.draggedObj);
        this.columns = this.columns.filter(
          e => e.colName !== this.draggedObj.colName
        );
      }

      this.draggedObj = null;
    }
  }
  delInput(e) {
    this.input.delete(e);
    this.columns.push(e);
    this.sortCol();
  }
  dropOutput(event) {
    if (this.draggedObj) {
      if (!this.input.has(this.draggedObj)) {
        this.output.clear();
        this.output.add(this.draggedObj);
        this.columns = this.columns.filter(
          e => e.colName !== this.draggedObj.colName
        );
      }
      this.draggedObj = null;
    }
  }
  delOutput(e) {
    this.output.delete(e);
    this.columns.push(e);
    this.sortCol();
  }
  dragEnd(event) {
    this.draggedObj = null;
  }
}
