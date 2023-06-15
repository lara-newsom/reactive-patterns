import { Injectable, computed, inject, signal } from '@angular/core';
import { delay, map, of, tap } from 'rxjs';
import { Product } from '../models/product';
import { PRODUCTS } from '../models/product-data.mock';
import { Category } from '../models/category';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductSignalsService {
  // Accessing the activated route directly in the service that consumes the product id query param
  // Query params are globally available therefore should be consumed directly where they are used
  private readonly activatedRoute = inject(ActivatedRoute);
  readonly selectedProductId = toSignal(this.activatedRoute.queryParams.pipe(
    map((queryParams) => queryParams['productId']))
  );


  readonly selectedCategory = signal<string>(Category.ALL);

  // Http requests are async and return an observable
  // this code is simulating an http request
  private readonly products$ = of(PRODUCTS).pipe(delay(300));
  readonly products = toSignal(this.products$, {initialValue: []});

  readonly filteredProducts = computed(() => {
    if(this.selectedCategory() === Category.ALL) {
      return this.products();
    }

    return this.products().filter((product: Product) => product.category === this.selectedCategory());
  });

  readonly selectedProduct = computed(() => {
    // comparing lowercase values so the query params do not have to be case sensitive
    return this.products().find((product) => product.id.toLowerCase() === this.selectedProductId().toLowerCase())
  });

  readonly homeProducts = computed(() => {
    const middle = Math.floor(this.products().length / 2);
    return [this.products()[0], this.products()[middle], this.products()[this.products().length -1]];
  });
}
