import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetListaComponent } from './tweet-lista/tweet-lista.component';
import { TweetDetalheComponent } from './tweet-detalhe/tweet-detalhe.component';

const routes: Routes = [
  {path: '', redirectTo: 'lista', pathMatch: 'full'},
  {path: 'lista', component: TweetListaComponent},
  {path: 'tweetar', component: TweetDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TweetRoutingModule { }
