import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRankingComponent } from './product-ranking.component';

describe('ProductRankingComponent', () => {
  let component: ProductRankingComponent;
  let fixture: ComponentFixture<ProductRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
