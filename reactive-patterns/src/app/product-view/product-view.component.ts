import { Component, Input, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Breadcrumb } from '../models/breadcrumb';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { Category } from '../models/category';
import { ProductSignalsService } from '../services/product-signals.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{
  // any time the categoryId input changes, we want to update our breadcrumbs array
  // we are using a setter to handle new values
  @Input() set categoryId(val: string) {
    this.productsService.setSelectedCategory(val);
    // TODO: comment out productsService and uncomment the line below
    // this.productsSignals.selectedCategory.set(val);

    this.breadcrumbs = this.breadcrumbs.slice(0,1);
    this.breadcrumbs.push(
      {
        display: val,
        routerLink: `/${ROUTE_TOKENS.products}/${val}`,
      }
    )
  }

  private readonly productsService = inject(ProductService);
  // TODO: signals service comment out productService and uncomment the next line
  // private readonly productsSignals = inject(ProductSignalsService)

  // The activated route is only available when the component is the destination of the current route
  private readonly activatedRoute = inject(ActivatedRoute);
  breadcrumbs: Breadcrumb[] = [
    {
      display: 'Products',
      routerLink: `/${ROUTE_TOKENS.products}/${Category.ALL}`,
    },
  ];

  ngOnInit() {
    // We want to dynamically form the breadcrumbs based off of our route
    this.activatedRoute.queryParamMap.subscribe((paramMap) => {
      this.breadcrumbs = this.breadcrumbs.slice(0, 2);
      if(paramMap.get('productId')){
        this.breadcrumbs.push(
          {
            display: paramMap.get('productId') || '',
            routerLink: ``,
          }
        )
      }})
  }
}
