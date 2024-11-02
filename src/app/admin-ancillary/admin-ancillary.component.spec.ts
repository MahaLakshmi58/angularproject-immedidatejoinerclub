import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAncillaryComponent } from './admin-ancillary.component';

describe('AdminAncillaryComponent', () => {
  let component: AdminAncillaryComponent;
  let fixture: ComponentFixture<AdminAncillaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAncillaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
