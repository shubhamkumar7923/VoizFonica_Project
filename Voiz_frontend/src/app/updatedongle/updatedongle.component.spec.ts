import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedongleComponent } from './updatedongle.component';

describe('UpdatedongleComponent', () => {
  let component: UpdatedongleComponent;
  let fixture: ComponentFixture<UpdatedongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedongleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
