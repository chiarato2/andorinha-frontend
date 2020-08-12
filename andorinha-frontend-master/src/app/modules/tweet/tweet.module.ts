import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TweetRoutingModule } from './tweet-routing.module';
import { TweetListaComponent } from './tweet-lista/tweet-lista.component';
import { TweetDetalheComponent } from './tweet-detalhe/tweet-detalhe.component';


@NgModule({
  declarations: [
    TweetListaComponent, 
    TweetDetalheComponent
  ],
  imports: [
    CommonModule,
    TweetRoutingModule
  ]
})
export class TweetModule { }
