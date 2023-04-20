import { Component, OnInit, HostListener} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'tsemh-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit{
  
  public modalRef?: BsModalRef;
  public formEntrada!: FormGroup;
 
  constructor(private modalService: BsModalService,
              private fb: FormBuilder) {
                this.criarForm();
              }

  criarForm() {
    this.formEntrada = this.fb.group({

      email: ['', Validators.required],
      senha: ['', Validators.required]

    })
  }

  enviarEntrada() {console.log(this.formEntrada.value);}

  openModal() {
    this.modalRef = this.modalService.show(EntradaComponent);
  }
  
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.altKey && event.key === 'l') {
      this.openModal();
    }
  }
  
  ngOnInit() {
  }
}
