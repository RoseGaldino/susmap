import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { UnidadeAtendimentoComponent } from './componentes/unidade-atendimento/unidade-atendimento.component';
import { TelaLoginComponent } from './componentes/tela-login/tela-login.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormularioComponent,
    RodapeComponent,
    UnidadeAtendimentoComponent,
    TelaLoginComponent,
    CabecalhoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
