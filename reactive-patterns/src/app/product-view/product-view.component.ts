import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Breadcrumb } from '../models/breadcrumb';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { Category } from '../models/category';
import { ProductSignalsService } from '../services/product-signals.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  @Input() set categoryId(val: string) {
    this.productsService.selectedCategory.set(val);
  }

  private readonly productsService = inject(ProductSignalsService);

  readonly filteredProducts = this.productsService.filteredProducts;


  private readonly router = inject(Router);

}




