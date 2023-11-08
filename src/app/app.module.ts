import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaItemsComponent } from './listaItems/lista-items/lista-items.component';
import { ItemComponent } from './item/item/item.component';
import { ItemClassDirectiveDirective } from './directivas/item-class-directive.directive';
import { NuevoItemComponent } from './nuevo-item/nuevo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaItemsComponent,
    ItemComponent,
    ItemClassDirectiveDirective,
    NuevoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
