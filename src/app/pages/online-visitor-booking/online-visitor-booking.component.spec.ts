import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineVisitorBookingComponent } from './online-visitor-booking.component';

describe('OnlineVisitorBookingComponent', () => {
  let component: OnlineVisitorBookingComponent;
  let fixture: ComponentFixture<OnlineVisitorBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineVisitorBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineVisitorBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
