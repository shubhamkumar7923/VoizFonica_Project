import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdongleComponent } from './userdongle.component';

describe('UserdongleComponent', () => {
  let component: UserdongleComponent;
  let fixture: ComponentFixture<UserdongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdongleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
