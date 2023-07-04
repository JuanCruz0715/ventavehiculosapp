import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallevehiculosComponent } from './detallevehiculos.component';

describe('DetallevehiculosComponent', () => {
  let component: DetallevehiculosComponent;
  let fixture: ComponentFixture<DetallevehiculosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallevehiculosComponent]
    });
    fixture = TestBed.createComponent(DetallevehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
