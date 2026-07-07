import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GpecDashboardComponent } from './gpec-dashboard';

describe('GpecDashboardComponent', () => {

  let component: GpecDashboardComponent;
  let fixture: ComponentFixture<GpecDashboardComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports:[GpecDashboardComponent]
    }).compileComponents();

    fixture=TestBed.createComponent(GpecDashboardComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
