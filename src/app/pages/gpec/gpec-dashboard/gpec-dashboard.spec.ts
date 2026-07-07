import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpecDashboard } from './gpec-dashboard';

describe('GpecDashboard', () => {
  let component: GpecDashboard;
  let fixture: ComponentFixture<GpecDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpecDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(GpecDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
