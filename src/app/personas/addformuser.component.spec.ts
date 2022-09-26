import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformuserComponent } from './addformuser.component';

describe('AddformuserComponent', () => {
  let component: AddformuserComponent;
  let fixture: ComponentFixture<AddformuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddformuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddformuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
