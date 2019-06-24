import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  @Output() selectEvent = new EventEmitter<string>();

  Select(selection: string) {
    this.selectEvent.emit(selection);
  }

  constructor() { }

  ngOnInit() {
  }

}
