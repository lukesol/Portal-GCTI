import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    const container = document.getElementById('container');
    container.classList.toggle('change');
  }

}
