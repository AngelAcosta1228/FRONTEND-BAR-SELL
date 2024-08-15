import { createReducer, on } from "@ngrx/store";
import { addProduct, removeProduct, removeAllProduct } from "./carrito.actions";
import { ItemCarrito } from "../component/bodycomponents/cards/itemCarrito";
import { ItemCarritoState } from "../component/bodycomponents/cards/itemCarrito.state";

export const initialState: ItemCarritoState = {
    products: [],
    grandTotal: 0
}


export const carritoReducer = createReducer(

initialState,
on(addProduct,(state, {product}) =>({
products: [...state.products, product],
grandTotal: state.grandTotal + product.precio
})),

on(removeProduct,(state, {productId, precio}) =>({
    products: state.products.filter(product => product.cod_prod !== productId),
    grandTotal: state.grandTotal - precio
    })),

)