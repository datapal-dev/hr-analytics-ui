import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDescrptionComponent } from './model-descrption.component';

describe('ModelDescrptionComponent', () => {
  let component: ModelDescrptionComponent;
  let fixture: ComponentFixture<ModelDescrptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDescrptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDescrptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
