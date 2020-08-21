import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  { path: '', component: TemplateComponent,
    children: [
      { path: 'home', loadChildren: () => import('../../modules/home/home.module').then((m) => m.HomeModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
