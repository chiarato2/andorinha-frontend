import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { SampleComponent } from './components/sample/sample-component/sample-component';
import { UsuarioListaComponent } from './modules/usuario/usuario-lista/usuario-lista.component';
import { UsuarioDetalheComponent } from './modules/usuario/usuario-detalhe/usuario-detalhe.component';
import { TweetListaComponent } from './modules/tweet/tweet-lista/tweet-lista.component';
import { TweetDetalheComponent } from './modules/tweet/tweet-detalhe/tweet-detalhe.component';
import { ComentarioDetalheComponent } from './modules/comentario/comentario-detalhe/comentario-detalhe.component';
import { ComentarioListaComponent } from './modules/comentario/comentario-lista/comentario-lista.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'usuario-lista',
    component: UsuarioListaComponent
  },
  {
    path: 'usuario-detalhe',
    component: UsuarioDetalheComponent
  },
  {
    path: 'tweet-lista',
    component: TweetListaComponent
  },
  {
    path: 'tweet-detalhe',
    component: TweetDetalheComponent
  },
  {
    path: 'comentario-detalhe',
    component: ComentarioDetalheComponent 
  },
  {
    path: 'comentario-lista',
    component: ComentarioListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
