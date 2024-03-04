import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyshiftComponent } from './monthlyshift.component';

describe('MonthlyshiftComponent', () => {
  let component: MonthlyshiftComponent;
  let fixture: ComponentFixture<MonthlyshiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonthlyshiftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthlyshiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
