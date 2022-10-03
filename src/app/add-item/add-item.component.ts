import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter<String>;

  constructor() { }

  ngOnInit() {
  }

  addNewItem(value: String) {
    this.newItemEvent.emit(value);
  }

}