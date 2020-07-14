import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-whatwedo-item',
  templateUrl: './whatwedo-item.component.html',
  styleUrls: ['./whatwedo-item.component.scss']
})
export class WhatwedoItemComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  item:any
}
