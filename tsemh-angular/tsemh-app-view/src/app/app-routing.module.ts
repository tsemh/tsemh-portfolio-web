import { DetalheComponent } from './detalhe/detalhe.component';
import { PainelControleComponent } from './painel-controle/painel-controle.component';
import { HomeComponent } from './home/home.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { ArtigoComponent } from './artigo/artigo.component';
import { FormacaoComponent } from './formacao/formacao.component';
import { CertificadoComponent } from './certificado/certificado.component';
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
