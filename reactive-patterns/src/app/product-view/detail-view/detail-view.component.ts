import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductSignalsService } from 'src/app/services/product-signals.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent {
  // The inject function is the same as declaring the service inside the constructor
  private readonly productService = inject(ProductService);
  // TODO: signals service comment out productService and uncomment the next line
  // private readonly productsSignals = inject(ProductSignalsService)

  // We are using declarative style programming to set this property equal to the selectedProduct observable
  readonly selectedProduct$ = this.productService.selectedProduct$;
  // TODO: signals service comment out productService and uncomment the next line
  // selectedProduct = this.productsSignals.selectedProduct;
}
