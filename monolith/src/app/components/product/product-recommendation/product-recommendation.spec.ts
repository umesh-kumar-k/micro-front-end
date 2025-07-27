import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecommendation } from './product-recommendation';

describe('ProductRecommendation', () => {
  let component: ProductRecommendation;
  let fixture: ComponentFixture<ProductRecommendation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductRecommendation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRecommendation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
