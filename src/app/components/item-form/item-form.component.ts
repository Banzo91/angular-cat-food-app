import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CatFood } from 'src/app/common/cat-food';
import { CatFoodService } from 'src/app/services/cat-food.service';
import { CatFoodType } from 'src/app/common/cat-food-type';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  itemFormGroup: FormGroup;

  item: CatFood = new CatFood();
  types: CatFoodType[] = [];
  isExistingItem: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private catFoodService: CatFoodService,
              private router: Router,
              private route: ActivatedRoute) { }

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

    this.isExistingItem = this.route.snapshot.paramMap.has('id');

    if (this.isExistingItem) {
      this.populateForm();
    }
  }

  onSubmit() {

    if (this.isExistingItem) {

      const itemId = +this.route.snapshot.paramMap.get('id');
      this.catFoodService.updateCatFoodItem(this.itemFormGroup.value, itemId);
    } else {

      this.catFoodService.addCatFoodItem(this.itemFormGroup.value);
    }
    
    this.router.navigate(['/items']);
  }

  populateForm() {

    const itemId = +this.route.snapshot.paramMap.get('id');

    this.catFoodService.getCatFoodItem(itemId).subscribe(
      data => {
        this.item = data;
        this.itemFormGroup.patchValue(data);
      }
    )

    console.log(this.item);
  }
}
