import { Injectable, computed, inject, signal } from '@angular/core';
import { delay, of, tap } from 'rxjs';
import { Product } from '../models/product';
import { PRODUCTS } from '../models/product-data.mock';
import { Category } from '../models/category';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductSignalsService {
  private readonly activatedRoute = inject(ActivatedRoute);


  readonly selectedCategory = signal<string>(Category.ALL);
  readonly selectedProductId = signal<string | undefined>(undefined);

  // Http requests are async and return an observable
  // this code is simulating an http request
  private readonly products$ = of(PRODUCTS).pipe(delay(300));

  readonly products = signal<Product[]>([]);

  readonly filteredProducts = computed(() => {
    if(this.selectedCategory() === Category.ALL) {
      return this.products();
    }

    return this.products().filter((product: Product) => product.category === this.selectedCategory());
  });

  readonly selectedProduct = computed(() => {
    return this.products().find((product) => product.id === this.selectedProductId())
  });

  readonly homeProducts = computed(() => {
    const middle = Math.floor(this.products().length / 2);
    return [this.products()[0], this.products()[middle], this.products()[this.products().length -1]];
  });

  constructor(){
    // httpClient returns observables
    this.products$
      .pipe(
        tap((products) => this.products.set(products)),
        takeUntilDestroyed()
      )
      .subscribe();

    // Activated Route returns observables
    this.activatedRoute.queryParams.pipe(
        tap((queryParams) => this.selectedProductId.set(queryParams['productId'])),
        takeUntilDestroyed(),
      ).subscribe();
  }
}
