import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './view/barra-nav/barra-nav.component';
import { CategoriaComponent } from './view/categoria/categoria.component';
import { CertificadoComponent } from './view/certificado/certificado.component';
import { DetalheComponent } from './view/detalhe/detalhe.component';
import { EntradaComponent } from './view/entrada/entrada.component';
import { FormacaoComponent } from './view/formacao/formacao.component';
import { GlobalListaComponent } from './view/global-lista/global-lista.component';
import { HomeComponent } from './view/home/home.component';
import { PainelControleComponent } from './view/painel-controle/painel-controle.component';
import { ArtigoComponent } from './view/artigo/artigo.component';
import { ProfissionalComponent } from './view/profissional/profissional.component';
import { ProjetoComponent } from './view/projeto/projeto.component';
import { RodapeComponent } from './view/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    CategoriaComponent,
    CertificadoComponent,
    DetalheComponent,
    EntradaComponent,
    FormacaoComponent,
    GlobalListaComponent,
    HomeComponent,
    PainelControleComponent,
    ArtigoComponent,
    ProfissionalComponent,
    ProjetoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
