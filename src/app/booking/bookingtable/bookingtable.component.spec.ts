import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingtableComponent } from './bookingtable.component';

describe('BookingtableComponent', () => {
  let component: BookingtableComponent;
  let fixture: ComponentFixture<BookingtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
