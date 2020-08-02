import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFood } from '../common/cat-food';
import { CatFoodType } from '../common/cat-food-type';

@Injectable({
  providedIn: 'root'
})
export class CatFoodService {

  private baseUrl = 'http://localhost:8080/api/products';
  private typeUrl = 'http://localhost:8080/api/product-types';

  constructor(private httpClient: HttpClient) { }

  getCatFoodTypes(): Observable<CatFoodType[]> {

    return this.httpClient.get<CatFoodType[]>(this.typeUrl);
  }

  getCatFoodItem(itemId: string): Observable<CatFood> {

    const itemUrl = `${this.baseUrl}/${itemId}`;

    return this.httpClient.get<CatFood>(itemUrl);
  }

  getCatFoodItemList(): Observable<CatFood[]> {
    
    return this.httpClient.get<CatFood[]>(this.baseUrl);
  }

  getCatFoodItemListByType(typeId: number): Observable<CatFood[]> {

    const searchUrl = `${this.baseUrl}/search/findByTypeId?id=${typeId}`;

    return this.httpClient.get<CatFood[]>(searchUrl);
  }

  addCatFoodItem(data: CatFood) {

    const body = JSON.stringify(data);

    console.log(body);

    this.httpClient.post(this.baseUrl, body).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
