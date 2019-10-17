import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { UnidadeAtendimentoComponent } from './unidade-atendimento/unidade-atendimento.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormularioComponent,
    RodapeComponent,
    UnidadeAtendimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
