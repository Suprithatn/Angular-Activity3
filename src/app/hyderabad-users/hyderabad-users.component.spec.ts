import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HyderabadUsersComponent } from './hyderabad-users.component';

describe('HyderabadUsersComponent', () => {
  let component: HyderabadUsersComponent;
  let fixture: ComponentFixture<HyderabadUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HyderabadUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HyderabadUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
