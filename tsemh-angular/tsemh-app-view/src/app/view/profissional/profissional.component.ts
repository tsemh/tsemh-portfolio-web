import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/app/models/Profissional';
import { ProfissionalService } from 'src/app/service/profissional.service';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  public tituloMain: string = 'profissional';

  public visaoCategoria: boolean = true;

  public entidades: Profissional[] = []

  constructor(private profissionalService: ProfissionalService) {  }

  determinaBoolean() {
    if(this.entidades.length >= 6) {
      this.visaoPaginacao = true
    }
    return this.visaoPaginacao;
   }
   public visaoPaginacao: boolean = this.determinaBoolean();

   carregarProfissional() {
    this.profissionalService.getAll().subscribe(
      (profissional: Profissional[]) => {
        this.entidades = profissional;
      },
      (e: any) => {
        console.error(e)
      }
    ); 
   }

   ngOnInit(): void {
     this.carregarProfissional();
   }
}
