import { Routes } from "@angular/router"
import { ListaItemsComponent } from "./listaItems/lista-items/lista-items.component"
import { NuevoItemComponent } from "./nuevo-item/nuevo-item.component"

export class AppRoutes {
    public static NUEVO_ITEM : string = "nuevo-item"
    public static LISTA_ITEMS : string = "lista-items"
}

export const routes : Routes = [
    {
        path: AppRoutes.NUEVO_ITEM,
        component: NuevoItemComponent
    },
    {
        path: AppRoutes.LISTA_ITEMS,
        component : ListaItemsComponent
    },
    {
        path: "", redirectTo: AppRoutes.LISTA_ITEMS,pathMatch: "full"
    }
]