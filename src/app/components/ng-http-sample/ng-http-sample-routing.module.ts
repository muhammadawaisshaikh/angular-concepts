import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgHttpSampleComponent } from './ng-http-sample.component';

const routes: Routes = [
  {
    path: '',
    component: NgHttpSampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgHttpSampleRoutingModule { }
