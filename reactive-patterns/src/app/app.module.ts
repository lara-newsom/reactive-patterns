import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { Route, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ROUTE_TOKENS } from './models/route-tokens';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedUiModule } from './shared-ui/shared-ui.module';

const ROUTES: Route[] = [
  {
    path: ROUTE_TOKENS.products,
    loadChildren: () => import('./product-view/product-view.module').then(m => m.ProductViewModule),
  },
  {
    path: '',
    redirectTo: ROUTE_TOKENS.home,
    pathMatch: 'full',
  },
  {
    path: ROUTE_TOKENS.home,
    component: HomeComponent,
  },
  {
    path: ROUTE_TOKENS.contact,
    loadChildren: () => import('./contact/contact-routes').then(m => m.CONTACT_ROUTES),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot(ROUTES, {
      enableTracing: true,
      bindToComponentInputs: true,
    }),
    SharedUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
