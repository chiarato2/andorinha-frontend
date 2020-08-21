import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { TemplateComponent } from './template/template.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [TemplateComponent],
  imports: [
    CommonModule,
    SharedModule,
    TemplateRoutingModule
  ]
})
export class TemplateModule { }
