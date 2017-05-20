import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import {
  ListComponent,
  ProductList,
  ProductRow,
  PriceDisplay,
  ProductImage,
  ProductDepartment,
} from './list.component';
import { CommunityComponent } from './community/community.component';
import { FeatureComponent } from './feature/feature.component';
import { StyleComponent } from './style/style.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent }
];


@NgModule({
  declarations: [
    ListComponent,
    ProductList,
    ProductRow,
    PriceDisplay,
    ProductImage,
    ProductDepartment,
    CommunityComponent,
    FeatureComponent,
    StyleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes) // <-- routes
  ],
  exports: [
    ProductList,
    ProductRow,
    PriceDisplay,
    ProductImage,
    ProductDepartment,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class ListModule { }
