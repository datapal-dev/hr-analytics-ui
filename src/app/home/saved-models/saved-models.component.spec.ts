import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedModelsComponent } from './saved-models.component';

describe('SavedModelsComponent', () => {
  let component: SavedModelsComponent;
  let fixture: ComponentFixture<SavedModelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedModelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
