import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncillaryLoginComponent } from './ancillary-login.component';

describe('AncillaryLoginComponent', () => {
  let component: AncillaryLoginComponent;
  let fixture: ComponentFixture<AncillaryLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncillaryLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AncillaryLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
