import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductSignalsService } from 'src/app/services/product-signals.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  private readonly productService = inject(ProductService);
  // TODO: signals service comment out productService and uncomment the next line
  // private readonly productsSignals = inject(ProductSignalsService)

  products$ = this.productService.filteredProducts$;
  // TODO: signals service comment out productService and uncomment the next line
  // products = this.productsSignals.products
}
