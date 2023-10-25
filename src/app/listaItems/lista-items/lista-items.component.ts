import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-lista-items',
  templateUrl: './lista-items.component.html',
  styleUrls: ['./lista-items.component.css']
})
export class ListaItemsComponent implements OnInit{

    itemList : Item[]
    constructor(){
      this.itemList = [{ 
        titulo:"Tarea num 1",
        descripcion:"Esta es la tarea 1",
        eliminado:false,
        estado:0,
        fecha: new Date()
      },
      { 
        titulo:"Tarea num 2",
        descripcion:"Esta es la tarea 2",
        eliminado:false,
        estado:1,
        fecha: new Date()
      },
      { 
        titulo:"Tarea num 3",
        descripcion:"Esta es la tarea 3, eliminada",
        eliminado:true,
        estado:0,
        fecha: new Date()
      }
      ]
    }
    ngOnInit(): void {
      
    }
    ejecutoEventoDesdeElHijo(parametro : Item){
      //alert(JSON.stringify(parametro))
    }
}
