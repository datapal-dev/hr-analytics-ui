import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadViewDataComponent } from './upload-view-data.component';

describe('UploadViewDataComponent', () => {
  let component: UploadViewDataComponent;
  let fixture: ComponentFixture<UploadViewDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadViewDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadViewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
