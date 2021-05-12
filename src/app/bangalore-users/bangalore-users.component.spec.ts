import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BangaloreUsersComponent } from './bangalore-users.component';

describe('BangaloreUsersComponent', () => {
  let component: BangaloreUsersComponent;
  let fixture: ComponentFixture<BangaloreUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BangaloreUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BangaloreUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
