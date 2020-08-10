import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatFood } from 'src/app/common/cat-food';
import { CatFoodService } from 'src/app/services/cat-food.service';
import { CatFoodType } from 'src/app/common/cat-food-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  itemFormGroup: FormGroup;

  item: CatFood = new CatFood();
  types: CatFoodType[] = [];

  constructor(private formBuilder: FormBuilder,
              private catFoodService: CatFoodService,
              private router: Router) { }

  ngOnInit(): void {

    this.itemFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      type: [''],
      price: [''],
      rating: [''],
      image: [''],
      netMass: [''],
      nutritionalValues: this.formBuilder.group({
        protein: [''],
        carbohydrates: [''],
        fat: ['']
      })
    })

    this.catFoodService.getCatFoodTypes().subscribe(
      data => {
        this.types = data;
      }
    );
  }

  onSubmit() {
    this.catFoodService.addCatFoodItem(this.itemFormGroup.value);
    this.router.navigate(['/items']);
  }
}
