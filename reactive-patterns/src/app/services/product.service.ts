import { Injectable, computed, inject, signal } from '@angular/core';
import { BehaviorSubject, map, switchMap, tap } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { PRODUCTS } from '../models/product-data.mock';
import { ProductApiService } from './product-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductSignalsService {
  private readonly productApiService = inject(ProductApiService);
  readonly products = toSignal(
    this.productApiService.getProducts$,
    { initialValue: [] }
  );

  private readonly activatedRoute = inject(ActivatedRoute);
  readonly selectedProductId = toSignal(
    this.activatedRoute.queryParams.pipe(
      map((params) => params['productId'])
      ));

  readonly selectedProduct = computed(() => {
      return this.products().find((product) =>
        product.id === this.selectedProductId());
  });





  readonly filteredProducts$ = this.selectedCategory.pipe(
    switchMap((category) => this.products$.pipe(
      map((products) => {
        if(category === Category.ALL) {
          return products;
        }

        return products.filter((product: Product) =>
          product.category === category);
      }),
    ))
  );

    // Products for the home view. We are grabbing three out of the array.
    readonly homeProducts$ = this.products$.pipe(
      map((products) => {
        if(products.length){
          const middle = Math.floor(products.length / 2);
          return [products[0], products[middle], products[products.length -1]];
        }
        return [];
      })
    );


  // public api that can set the selected category on the selectedCategory behavior subject

  setSelectedProduct(category: string) {
    this.selectedCategory.next(category);
  }
}
