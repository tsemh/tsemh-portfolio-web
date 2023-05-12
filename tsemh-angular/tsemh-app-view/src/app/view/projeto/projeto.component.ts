import { Component } from '@angular/core';
import { Registro} from 'src/app/models/Registro';
import { RegistroService } from 'src/app/service/registro.service';

@Component({
  selector: 'tsemh-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent {

  public tituloMain: string = "projetos";
  public tipo: string = "projeto";
  public registro: Registro[] = []

   ngOnInit(): void { }
}
