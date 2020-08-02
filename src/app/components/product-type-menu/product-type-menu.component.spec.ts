import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeMenuComponent } from './product-type-menu.component';

describe('ProductTypeMenuComponent', () => {
  let component: ProductTypeMenuComponent;
  let fixture: ComponentFixture<ProductTypeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTypeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
