import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CertificadoComponent } from './certificado/certificado.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { EntradaComponent } from './entrada/entrada.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { GeralComponent } from './geral/geral.component';
import { GlobalListaComponent } from './global-lista/global-lista.component';
import { HomeComponent } from './home/home.component';
import { PainelControleComponent } from './painel-controle/painel-controle.component';
import { ArtigoComponent } from './artigo/artigo.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    CategoriaComponent,
    CertificadoComponent,
    DetalheComponent,
    EntradaComponent,
    FormacaoComponent,
    GeralComponent,
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
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
