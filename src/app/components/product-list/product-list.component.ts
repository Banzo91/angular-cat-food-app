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
  typeId: number;

  constructor(private catFoodService: CatFoodService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listItems()
    });
  }

  listItems() {

    const viewMode = this.route.snapshot.paramMap.has('id');

    if (viewMode) {
      this.typeId = +this.route.snapshot.paramMap.get('id');

      console.log("Type: " + this.typeId);

      return this.catFoodService.getCatFoodItemListByType(this.typeId).subscribe(
        data => {
          this.items = data;
        }
      );

    } else {
      return this.catFoodService.getCatFoodItemList().subscribe(
        data => {
          this.items = data;
        }
      );
    }
  }

}
