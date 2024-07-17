import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { API_ENDPOINTS } from '../constants/api-endpoints';
import { environment } from '../../../environments/environment';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.DUMMY_MICROSERVICE;
  private productsEndpoint = API_ENDPOINTS.PRODUCTS;

	constructor(private http: HttpClient) {}

	getProducts(): Observable<Product[]> {
		return this.http.get<{ products: Product[] }>(`${this.apiUrl}/${this.productsEndpoint}?limit=50`)
			.pipe(map(response => response.products));
	}
	
}
