import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPreprationComponent } from './data-prepration.component';

describe('DataPreprationComponent', () => {
  let component: DataPreprationComponent;
  let fixture: ComponentFixture<DataPreprationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPreprationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPreprationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
