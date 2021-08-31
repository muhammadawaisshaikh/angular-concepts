import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgHttpSampleRoutingModule } from './ng-http-sample-routing.module';
import { NgHttpSampleComponent } from './ng-http-sample.component';


@NgModule({
  declarations: [
    NgHttpSampleComponent
  ],
  imports: [
    CommonModule,
    NgHttpSampleRoutingModule
  ]
})
export class NgHttpSampleModule { }
