import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrls: ['./modal-email.component.scss']
})
export class ModalEmailComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  mostrarArquivo(input) {
  const file = input.target.files[0];
  const textField = (document.getElementById('nomeArquivo') as HTMLInputElement);

  textField.value = file.name;
}

}
