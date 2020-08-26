import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalEmailComponent } from './../modal-email/modal-email.component';
  
@Component({
  selector: 'app-who-makes-us',
  templateUrl: './who-makes-us.component.html',
  styleUrls: ['./who-makes-us.component.scss']
})
export class WhoMakesUsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  
  open() {
    const modalRef = this.modalService.open(ModalEmailComponent);
  }

}

