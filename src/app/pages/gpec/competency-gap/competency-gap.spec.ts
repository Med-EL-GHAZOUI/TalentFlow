import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyGap } from './competency-gap';

describe('CompetencyGap', () => {
  let component: CompetencyGap;
  let fixture: ComponentFixture<CompetencyGap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetencyGap],
    }).compileComponents();

    fixture = TestBed.createComponent(CompetencyGap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
