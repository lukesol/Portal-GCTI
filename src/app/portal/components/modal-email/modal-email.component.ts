import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from "ngx-simple-modal";
import { getInputValues } from '@angularclass/hmr';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-modal-email',
  templateUrl: './modal-email.component.html',
  styleUrls: ['./modal-email.component.scss']
})
export class ModalEmailComponent extends SimpleModalComponent<EmailModel, null> implements OnInit {

  title: string;
  message: string;
  
  constructor() {
    super();
  }

  ngOnInit(): void {
  }  
  
  troca(){
  };

}

export interface EmailModel {
  title: string;
  message: string;
}