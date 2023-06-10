import { NgModule } from '@angular/core';
import { ProductViewComponent } from './product-view.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { Route, RouterModule } from '@angular/router';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ROUTE_TOKENS } from '../models/route-tokens';
import { BreadcrumbsComponent } from '../shared-ui/breadcrumbs/breadcrumbs.component';

const ROUTES: Route[] = [
  {
    path: ':categoryId',
    component: ProductViewComponent,
    // we are rendering the child routes in a nested router outlet
    children: [
      {
        path: ROUTE_TOKENS.productDetail,
        component: DetailViewComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    ProductViewComponent,
    DetailViewComponent,
    SideMenuComponent,
  ],
  imports: [
    AsyncPipe,
    NgIf,
    NgFor,
    MatButtonModule,
    MatIconModule,
    BreadcrumbsComponent,
    RouterModule.forChild(ROUTES),
  ],
})
export class ProductViewModule {}

