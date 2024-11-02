import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAncillaryHistoryComponent } from './login-ancillary-history.component';

describe('LoginAncillaryHistoryComponent', () => {
  let component: LoginAncillaryHistoryComponent;
  let fixture: ComponentFixture<LoginAncillaryHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAncillaryHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAncillaryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
