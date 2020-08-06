import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from "ngx-simple-modal";
import { ModalEmailComponent } from '../modal-email/modal-email.component';

@Component({
  selector: 'app-who-makes-us',
  templateUrl: './who-makes-us.component.html',
  styleUrls: ['./who-makes-us.component.scss']
})
export class WhoMakesUsComponent implements OnInit {

  constructor(private simpleModalService: SimpleModalService) { }

  ngOnInit(): void {
  }
  
  showAlert() {
    this.simpleModalService.addModal(ModalEmailComponent, {
      title: "Junte-se ao Time GCTI",
      message: "Envie o seu currículo no formato DOC ou PDF"
    });
  }

}
