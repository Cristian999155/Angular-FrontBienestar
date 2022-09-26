import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciobienestarComponent } from './serviciobienestar.component';

describe('ServiciobienestarComponent', () => {
  let component: ServiciobienestarComponent;
  let fixture: ComponentFixture<ServiciobienestarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciobienestarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciobienestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
