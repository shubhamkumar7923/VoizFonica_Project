import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoizfonicaComponent } from './voizfonica.component';

describe('VoizfonicaComponent', () => {
  let component: VoizfonicaComponent;
  let fixture: ComponentFixture<VoizfonicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoizfonicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoizfonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
