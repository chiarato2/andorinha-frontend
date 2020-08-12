import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentarioRoutingModule } from './comentario-routing.module';
import { ComentarioDetalheComponent } from './comentario-detalhe/comentario-detalhe.component';
import { ComentarioListaComponent } from './comentario-lista/comentario-lista.component';


@NgModule({
  declarations: [
    ComentarioDetalheComponent, 
    ComentarioListaComponent],
  imports: [
    CommonModule,
    ComentarioRoutingModule
  ]
})
export class ComentarioModule { }
