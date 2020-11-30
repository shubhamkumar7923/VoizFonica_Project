import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentpostComponent } from './paymentpost.component';

describe('PaymentpostComponent', () => {
  let component: PaymentpostComponent;
  let fixture: ComponentFixture<PaymentpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
