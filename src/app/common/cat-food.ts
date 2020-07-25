import { NutritionalValues } from './nutritional-values';

export class CatFood {

    id: number;
    name: string;
    type: string;
    price: number;
    rating: number;
    image: string;
    netMass: number;
    nutritionalValues: NutritionalValues = new NutritionalValues();
}
