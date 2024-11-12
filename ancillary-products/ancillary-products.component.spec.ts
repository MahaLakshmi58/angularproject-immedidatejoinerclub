import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncillaryProductsComponent } from './ancillary-products.component';

describe('AncillaryProductsComponent', () => {
  let component: AncillaryProductsComponent;
  let fixture: ComponentFixture<AncillaryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AncillaryProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AncillaryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
