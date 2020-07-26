import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatFood } from '../common/cat-food';

@Injectable({
  providedIn: 'root'
})
export class CatFoodService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  getCatFoodItem(itemId: string): Observable<CatFood> {

    const itemUrl = `${this.baseUrl}/${itemId}`;

    return this.httpClient.get<CatFood>(itemUrl);
  }

  getCatFoodItemList(): Observable<CatFood[]> {
    
    return this.httpClient.get<CatFood[]>(this.baseUrl);
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
