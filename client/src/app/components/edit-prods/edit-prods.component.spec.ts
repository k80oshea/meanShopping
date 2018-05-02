import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProdsComponent } from './edit-prods.component';

describe('EditProdsComponent', () => {
  let component: EditProdsComponent;
  let fixture: ComponentFixture<EditProdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
