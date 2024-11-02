import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoohingAncillaryComponent } from './boohing-ancillary.component';

describe('BoohingAncillaryComponent', () => {
  let component: BoohingAncillaryComponent;
  let fixture: ComponentFixture<BoohingAncillaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoohingAncillaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoohingAncillaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
