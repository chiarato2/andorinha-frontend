import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TweetRoutingModule } from './tweet-routing.module';
import { TweetListaComponent } from './tweet-lista/tweet-lista.component';
import { TweetDetalheComponent } from './tweet-detalhe/tweet-detalhe.component';


@NgModule({
  declarations: [
    TweetListaComponent, 
    TweetDetalheComponent,
  ],
  imports: [
    CommonModule,
    TweetRoutingModule,
    NgbModule
  ]
})
export class TweetModule { }
