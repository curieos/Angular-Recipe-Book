import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", {static: true}) nameInputRef: ElementRef;
  @ViewChild("quanityInput", {static: true}) quanityInputRef: ElementRef;
  @Output() itemAdded = new EventEmitter<Ingredient>();

  AddItem() {
    this.itemAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.quanityInputRef.nativeElement.value));
  }

  constructor() { }

  ngOnInit() {
  }

}
