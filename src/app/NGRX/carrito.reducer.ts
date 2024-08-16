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

  //   on(addProduct, (state, { product }) => {
  //   const existingItem = state.products.find(i => i.cod_prod === product.cod_prod);

  //   let updatedItems;

  //   if (existingItem) {
  //     updatedItems = state.products.map(i =>
  //       i.cod_prod === product.cod_prod
  //         ? { ...i, quantity: i.quantity + product.quantity }
  //         : i
  //     );
  //   } else {
  //     updatedItems = [...state.products, product];
  //   }

  //   const updatedTotalAmount = state.grandTotal + product.precio * product.quantity;

  //   return {
  //     ...state,
  //     products: updatedItems,
  //     totalAmount: updatedTotalAmount
  //   };
  // }),
)