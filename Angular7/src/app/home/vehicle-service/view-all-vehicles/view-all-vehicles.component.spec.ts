import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllVehiclesComponent } from './view-all-vehicles.component';

describe('ViewAllVehiclesComponent', () => {
  let component: ViewAllVehiclesComponent;
  let fixture: ComponentFixture<ViewAllVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
