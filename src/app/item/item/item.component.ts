import { Component } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  protected item : Item

  constructor(){
    this.item = { titulo:"Este es mi item",descripcion: "Esta es mi descripcion",eliminado:false,fecha:new Date(),estado:0}
  }
}
