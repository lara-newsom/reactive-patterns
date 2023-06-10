import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';

interface ProductsResponse {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {
  private readonly http = inject(HttpClient);
  private readonly endpointUrl = 'http://localhost:3000/products';

  // This sets the public observable property to the observables returned by the httpClient get method
  // This observable will emit one value when the response is received and then complete
  getProducts$ = this.http.get<ProductsResponse>(this.endpointUrl).pipe(
    map((response) => response.products)
  );
}
