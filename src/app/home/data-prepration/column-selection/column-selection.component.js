"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ColumnSelectionComponent = (function () {
    function ColumnSelectionComponent() {
        this.columns = [];
        this.selection = new core_1.EventEmitter();
        this.input = [];
        this.output = [];
    }
    ColumnSelectionComponent.prototype.ngOnInit = function () {
    };
    ColumnSelectionComponent.prototype.next = function () {
        this.selection.emit({ data: { dum: 'dim' } });
    };
    __decorate([
        core_1.Input()
    ], ColumnSelectionComponent.prototype, "columns");
    __decorate([
        core_1.Output('selection')
    ], ColumnSelectionComponent.prototype, "selection");
    ColumnSelectionComponent = __decorate([
        core_1.Component({
            selector: 'app-column-selection',
            templateUrl: './column-selection.component.html',
            styleUrls: ['./column-selection.component.css']
        })
    ], ColumnSelectionComponent);
    return ColumnSelectionComponent;
}());
exports.ColumnSelectionComponent = ColumnSelectionComponent;
