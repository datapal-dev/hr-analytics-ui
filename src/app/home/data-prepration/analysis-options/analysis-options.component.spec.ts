import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisOptionsComponent } from './analysis-options.component';

describe('AnalysisOptionsComponent', () => {
  let component: AnalysisOptionsComponent;
  let fixture: ComponentFixture<AnalysisOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
