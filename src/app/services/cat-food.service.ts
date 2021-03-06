import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getCatFoodItem(itemId: number): Observable<CatFood> {

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

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');;

    this.httpClient.post<CatFood>(this.baseUrl, body, {headers}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  searchItems(keyword: string): Observable<CatFood[]> {

    const searchUrl = `${this.baseUrl}/search/findByName?name=${keyword}`;

    return this.httpClient.get<CatFood[]>(searchUrl);
  }

  deleteCatFoodItem(itemId: number) {

    const deleteUrl = `${this.baseUrl}/${itemId}`;

    this.httpClient.delete(deleteUrl).subscribe(
      (res) => console.log('Delete action'),
      (err) => console.log(err)
    );
  }

  updateCatFoodItem(data: CatFood, itemId: number) {

    const updateUrl = `${this.baseUrl}/${itemId}`;
    const body = JSON.stringify(data);

    console.log(body);

    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');;

    this.httpClient.put<CatFood>(updateUrl, body, {headers}).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  getCatFoodItemListOrderedByRating(): Observable<CatFood[]> {
    
    const searchUrl = `${this.baseUrl}/search/findByRating`;

    return this.httpClient.get<CatFood[]>(searchUrl);
  }
}
