import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ItemCarritoState } from 'src/app/component/bodycomponents/cards/itemCarrito.state';
import { AppState } from 'src/app/app.state';
import { ItemCarrito } from 'src/app/component/bodycomponents/cards/itemCarrito';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
constructor(private store: Store<AppState>){}

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
