import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComentarioListaComponent } from './comentario-lista/comentario-lista.component';
import { ComentarioDetalheComponent } from './comentario-detalhe/comentario-detalhe.component';

const routes: Routes = [
  {path: '', redirectTo: 'lista', pathMatch:'full'},
  {path: 'lista', component: ComentarioListaComponent},
  {path: 'comentar', component: ComentarioDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComentarioRoutingModule { }
