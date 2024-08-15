import { createAction , props } from "@ngrx/store";
import { ItemCarrito } from "../component/bodycomponents/cards/itemCarrito";

export const addProduct = createAction(
    "[Card component] Agregar carrito", 
    props <{product: ItemCarrito}>()
)

export const removeProduct = createAction(
    "[Card component] eliminar producto carrito", 
    props <{productId: ItemCarrito, precio: number}>()
)

export const removeAllProduct = createAction(
    "[Card component] Remove All carrito", 
)