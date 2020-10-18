import { Component, OnInit } from '@angular/core';
import { CatFoodService } from 'src/app/services/cat-food.service';
import { ActivatedRoute } from '@angular/router';
import { CatFood } from 'src/app/common/cat-food';

@Component({
  selector: 'app-product-ranking',
  templateUrl: './product-ranking.component.html',
  styleUrls: ['./product-ranking.component.css']
})
export class ProductRankingComponent implements OnInit {

  items: CatFood[];

  constructor(private catFoodService: CatFoodService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.catFoodService.getCatFoodItemListOrderedByRating().subscribe(
      data => {
        this.items = data;
      }
    )
  }
}
