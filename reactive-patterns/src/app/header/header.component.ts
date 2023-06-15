import { Component, inject } from '@angular/core';
import { LINKS, CategoryLink, Category } from '../models/category';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { ProductHybridService } from '../services/product.service';
import { ProductSignalsService } from '../services/product-signals.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // we need references to these constants inside the context of the class
  readonly LINKS: CategoryLink[] = LINKS;
  readonly ROUTE_TOKENS = ROUTE_TOKENS;
  readonly Category = Category;


  private readonly productService = inject(ProductSignalsService);

  readonly selectedProduct = this.productService.selectedProduct;


}
