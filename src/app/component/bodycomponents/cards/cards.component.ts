import { Component } from '@angular/core';
import { PeticionService } from '../../../servicios/peticion.service';
import { ProductosComponent } from '../../productos/productos.component';
import { ItemCarrito } from './itemCarrito';
import { Store } from '@ngrx/store';
import { NotificationsComponent } from 'src/app/components/notifications/notifications.component';
import { addProduct, removeAllProduct, removeProduct } from 'src/app/NGRX/carrito.actions';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent {
  

  constructor (private peticion:PeticionService, private store:Store ){}
  
  ngOnInit(): void {
    this.cargarTodas()
  }
  
  datos:any[] = []
  estado:number = 1


  cargarTodas(){

    let post = {
      host:this.peticion.urlHost,
      path:"/productos/listar",
      payload:{
      }
    }
  this.peticion.Post(post.host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.datos = res.data
    }
  )
  }
  addToCart(product: ItemCarrito){
this.store.dispatch(addProduct({product}))
  }
  //   agregarcarrito(item: ProductosComponent){
// console.log(item)
// let iCarrito: ItemCarrito = {
//   cod_prod: item.cod_prod,
//   nombre: item.nombre,
//   precio: item.precio,
//   cantidad: 1
// }
// if (localStorage.getItem("carrito") === null){
//   let carrito: ItemCarrito[] = [];
//   carrito.push(iCarrito);
//   localStorage.setItem("carrito", JSON.stringify(carrito));
// }
// else { 
//   let carritoStorage = localStorage.getItem("carrito")as string;
//   let carrito = JSON.parse(carritoStorage);
//   let index = -1;
//   for (let i= 0; i<carrito.length; i++) {
//     let itemC: ItemCarrito = carrito[i];
//     if(iCarrito.nombre === itemC.nombre){
//       index = i;
//       break;
//     }
//   }
//   if(index === -1){
//     carrito.push(iCarrito);
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//   }
//   else{
//     let itemCarrito : ItemCarrito = carrito[index];
//     itemCarrito.cantidad++;
//     carrito[index] = itemCarrito;
//     localStorage.setItem("carrito", JSON.stringify(carrito));
//   }
// }
//   }

}
