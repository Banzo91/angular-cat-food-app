import { NutritionalValues } from './nutritional-values';
import { CatFoodType } from './cat-food-type';

export class CatFood {

    id: number;
    name: string;
    type: CatFoodType = new CatFoodType();
    price: number;
    rating: number;
    image: string;
    netMass: number;
    nutritionalValues: NutritionalValues = new NutritionalValues();
}
