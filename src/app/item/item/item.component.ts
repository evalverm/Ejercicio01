import { Component, Input,Output,EventEmitter,AfterViewInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() item : Item
  @Output() eventoDesdeElHijo = new EventEmitter<Item>()

  constructor(){
  }
  ngAfterViewInit(){
    this.eventoDesdeElHijo.emit(this.item)
  }
}
