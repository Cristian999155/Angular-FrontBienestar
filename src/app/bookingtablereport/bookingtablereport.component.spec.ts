import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingtablereportComponent } from './bookingtablereport.component';

describe('BookingtablereportComponent', () => {
  let component: BookingtablereportComponent;
  let fixture: ComponentFixture<BookingtablereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingtablereportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingtablereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
