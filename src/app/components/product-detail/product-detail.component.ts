import { Component, OnInit } from '@angular/core';
import { CatFood } from 'src/app/common/cat-food';
import { CatFoodService } from 'src/app/services/cat-food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  item: CatFood = new CatFood();

  constructor(private catFoodService: CatFoodService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => this.showProduct()
    );
  }

  showProduct() {

    const itemId = +this.route.snapshot.paramMap.get('id');

    return this.catFoodService.getCatFoodItem(itemId).subscribe(
      data => {
        this.item = data;
      }
    );
  }

  goBack() {
    this.location.back();
  }

  deleteProduct(productId: number) {
    this.catFoodService.deleteCatFoodItem(productId);
    this.router.navigateByUrl('/items');
  }
}
