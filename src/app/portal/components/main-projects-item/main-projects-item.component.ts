import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-projects-item',
  templateUrl: './main-projects-item.component.html',
  styleUrls: ['./main-projects-item.component.scss']
})
export class MainProjectsItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
@Input()
item:any

}
