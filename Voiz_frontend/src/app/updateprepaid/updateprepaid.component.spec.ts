import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprepaidComponent } from './updateprepaid.component';

describe('UpdateprepaidComponent', () => {
  let component: UpdateprepaidComponent;
  let fixture: ComponentFixture<UpdateprepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
