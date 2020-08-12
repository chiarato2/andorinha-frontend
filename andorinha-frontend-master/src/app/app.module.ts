import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { SampleModule } from './components/sample/sample.module';
import { TweetModule } from './modules/tweet/tweet.module';
import { ComentarioModule } from './modules/comentario/comentario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    UsuarioModule,
    SampleModule,
    TweetModule,
    ComentarioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
