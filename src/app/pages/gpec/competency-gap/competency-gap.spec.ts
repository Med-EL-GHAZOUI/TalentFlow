import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompetencyGapComponent } from './competency-gap';

describe('CompetencyGapComponent',()=>{

  let component:CompetencyGapComponent;
  let fixture:ComponentFixture<CompetencyGapComponent>;

  beforeEach(async()=>{

    await TestBed.configureTestingModule({
      imports:[CompetencyGapComponent]
    }).compileComponents();

    fixture=TestBed.createComponent(CompetencyGapComponent);
    component=fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create',()=>{

    expect(component).toBeTruthy();

  });

});
