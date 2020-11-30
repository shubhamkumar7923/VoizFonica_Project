import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentofferComponent } from './paymentoffer.component';

describe('PaymentofferComponent', () => {
  let component: PaymentofferComponent;
  let fixture: ComponentFixture<PaymentofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentofferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
