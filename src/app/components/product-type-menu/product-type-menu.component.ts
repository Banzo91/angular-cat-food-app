import { Component, OnInit } from '@angular/core';
import { CatFoodType } from 'src/app/common/cat-food-type';
import { CatFoodService } from 'src/app/services/cat-food.service';

@Component({
  selector: 'app-product-type-menu',
  templateUrl: './product-type-menu.component.html',
  styleUrls: ['./product-type-menu.component.css']
})
export class ProductTypeMenuComponent implements OnInit {

  itemTypes: CatFoodType[] = [];

  constructor(private catFoodService: CatFoodService) { }

  ngOnInit(): void {
    this.getTypes();
  }

  getTypes() {

    return this.catFoodService.getCatFoodTypes().subscribe(
      data => {
        this.itemTypes = data;
      }
    )
  }
}
