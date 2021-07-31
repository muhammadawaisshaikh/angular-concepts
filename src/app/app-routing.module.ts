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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
