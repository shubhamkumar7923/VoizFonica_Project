import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpreComponent } from './userpre.component';

describe('UserpreComponent', () => {
  let component: UserpreComponent;
  let fixture: ComponentFixture<UserpreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserpreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
