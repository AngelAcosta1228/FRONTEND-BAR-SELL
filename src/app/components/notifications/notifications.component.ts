import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ItemCarritoState } from 'src/app/component/bodycomponents/cards/itemCarrito.state';
import { AppState } from 'src/app/app.state';
import { ItemCarrito } from 'src/app/component/bodycomponents/cards/itemCarrito';
import { Observable } from 'rxjs';
import { selectCartItems, selectCartTotalAmount, selectCartTotalQuantity } from 'src/app/NGRX/cart.selectors';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  // products$: Observable<ItemCarrito[] | null>;
  // grandTotal$: Observable<number>;
  // totalQuantity$: Observable<number> | null;
constructor(private store: Store<AppState>){
  // this.products$ = this.store.select(selectCartItems);
  //   this.grandTotal$ = this.store.select(selectCartTotalAmount);
  //   this.totalQuantity$ = this.store.select(selectCartTotalQuantity);
}
productosNGRX : ItemCarrito[] = []

getProduct(){
  this.store.pipe(select('cartState')).subscribe((state: ItemCarritoState)=> {
    this.productosNGRX = state.products
  })
}
ngOnInit(): void {
    this.getProduct()
}

}
