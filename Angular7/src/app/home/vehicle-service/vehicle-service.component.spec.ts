import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleServiceComponent } from './vehicle-service.component';

describe('VehicleServiceComponent', () => {
  let component: VehicleServiceComponent;
  let fixture: ComponentFixture<VehicleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
