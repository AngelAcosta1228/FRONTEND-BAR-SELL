import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ItemCarritoState } from '../component/bodycomponents/cards/itemCarrito.state';

export const selectCart = createFeatureSelector<ItemCarritoState>('cart');

export const selectCartItems = createSelector(
  selectCart,
  (state: ItemCarritoState) => state.products
);

export const selectCartTotalAmount = createSelector(
  selectCart,
  (state: ItemCarritoState) => state.grandTotal
);

export const selectCartTotalQuantity = createSelector(
  selectCartItems,
  (products) => products.reduce((total, product) => total + product.quantity, 0)
);