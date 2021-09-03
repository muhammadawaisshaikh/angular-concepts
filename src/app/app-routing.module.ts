import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/parent/child/child.component';

const routes: Routes = [
  {
    path: '',
    component: ParentComponent
  },
  {
    path: 'parent',
    component: ParentComponent
  },
  {
    path: 'child',
    component: ChildComponent
  },
  {
    path: 'ng-http-sample',
    loadChildren: () => import('./components/ng-http-sample/ng-http-sample.module').then((m) => m.NgHttpSampleModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./components/products/products.module').then((m) => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
