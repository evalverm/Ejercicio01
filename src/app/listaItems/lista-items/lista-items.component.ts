import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit{

    item : Item
    constructor(){
      this.item = { titulo:"Titulo desde el padre",descripcion:"Descripcion desde el padre",eliminado:false,estado:0,fecha: new Date()}
    }
    ngOnInit(): void {
      
    }
    ejecutoEventoDesdeElHijo(parametro : Item){
      alert(JSON.stringify(parametro))
    }
}
