import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemsComponent } from './components/lista-items/lista-items.component';
import { ItemComponent } from './components/item/item.component';
import { ItemClassDirectiveDirective } from '../directivas/item-class-directive.directive';
import { NuevoItemComponent } from './components/nuevo-item/nuevo-item.component';
import { AppRoutingModule } from '../app-routing.module';


 

@NgModule({
  declarations: [
    ListaItemsComponent,
    ItemComponent,
    ItemClassDirectiveDirective,
    NuevoItemComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ItemModule { }
