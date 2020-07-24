import { Component, OnInit } from '@angular/core';
import { CatFood } from '../../common/cat-food';
import { CatFoodService } from '../../services/cat-food.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: CatFood[];

  constructor(private catFoodService: CatFoodService) { }

  ngOnInit(): void {
    this.listItems();
  }

  listItems() {
    return this.catFoodService.getCatFoodItemList().subscribe(
      data => {
        this.items = data;
      }
    );
  }

}
