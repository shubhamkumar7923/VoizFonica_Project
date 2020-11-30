import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdongleComponent } from './paymentdongle.component';

describe('PaymentdongleComponent', () => {
  let component: PaymentdongleComponent;
  let fixture: ComponentFixture<PaymentdongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentdongleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentdongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
