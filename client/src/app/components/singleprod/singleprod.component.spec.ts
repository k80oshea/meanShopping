import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleprodComponent } from './singleprod.component';

describe('SingleprodComponent', () => {
  let component: SingleprodComponent;
  let fixture: ComponentFixture<SingleprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
