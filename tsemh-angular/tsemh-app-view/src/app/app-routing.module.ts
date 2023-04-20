import { DetalheComponent } from './view/detalhe/detalhe.component';
import { PainelControleComponent } from './view/painel-controle/painel-controle.component';
import { HomeComponent } from './view/home/home.component';
import { ProfissionalComponent } from './view/profissional/profissional.component';
import { ProjetoComponent } from './view/projeto/projeto.component';
import { ArtigoComponent } from './view/artigo/artigo.component';
import { FormacaoComponent } from './view/formacao/formacao.component';
import { CertificadoComponent } from './view/certificado/certificado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'painel-de-controle', component: PainelControleComponent },
  { path: 'certificados', component: CertificadoComponent },
  { path: 'formacoes', component: FormacaoComponent },
  { path: 'artigos', component: ArtigoComponent },
  { path: 'projetos', component: ProjetoComponent },
  { path: 'profissional', component: ProfissionalComponent },
  { path: 'detalhes', component: DetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
