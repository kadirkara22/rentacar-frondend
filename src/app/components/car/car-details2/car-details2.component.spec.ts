import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetails2Component } from './car-details2.component';

describe('CarDetails2Component', () => {
  let component: CarDetails2Component;
  let fixture: ComponentFixture<CarDetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
