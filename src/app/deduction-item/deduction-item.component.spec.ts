import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeductionItemComponent } from './deduction-item.component';

describe('DeductionItemComponent', () => {
  let component: DeductionItemComponent;
  let fixture: ComponentFixture<DeductionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeductionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeductionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
