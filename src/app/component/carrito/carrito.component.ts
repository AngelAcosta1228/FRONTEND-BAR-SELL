import { Component } from '@angular/core';
import { ItemCarrito } from '../bodycomponents/cards/itemCarrito';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ItemCarritoState } from '../bodycomponents/cards/itemCarrito.state';
import { removeProduct } from 'src/app/NGRX/carrito.actions';
import { Observable } from 'rxjs';
import { selectCartItems, selectCartTotalAmount } from 'src/app/NGRX/cart.selectors';
declare let $:any
declare let Swal:any
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  products$: Observable<ItemCarrito[] | null>;
  grandTotal$: Observable<number>;
  constructor(private store: Store<AppState>){
    this.products$ = this.store.select(selectCartItems);
    this.grandTotal$ = this.store.select(selectCartTotalAmount);
  }

productosNGRX : ItemCarrito[] = []
totalNGRX: number = 0

getProduct(){
  this.store.pipe(select('cartState')).subscribe((state: ItemCarritoState)=> {
    this.productosNGRX = state.products
    this.totalNGRX = state.grandTotal
  })
}
deleteProduct(cod_prod: any, precio: number){
  this.store.dispatch(removeProduct({productId : cod_prod, precio}))
}
ngOnInit(): void {
    this.getProduct()
}
}

//   listaItemsCarrito: ItemCarrito[] | undefined
//   ItemCarrito: any;
//   Idseleccionado: string | undefined

//   ngOnInit(): void {
//     let carritoStorage =  localStorage.getItem("carrito")as any;
//   let carrito = JSON.parse(carritoStorage);
// this.listaItemsCarrito = carrito  
// }

// vaciarcarrito(){
//   localStorage.clear();
//   this.listaItemsCarrito = [];
// }
//   constructor (private peticion:PeticionService){}


  
//   // ngOnInit(): void {
//   //   this.cargarTodas()
//   // }
  
//   // cod_prod:string = ""
//   // precio:Number= 0
//   // nombre:string = ""
//   // imagen:string = ""
//   // datos:any[] = []
//   // Idseleccionado:String =""
//   // datoscategorias:any[] = []


//   // cargarTodas(){

//   //   let post = {
//   //     host:this.peticion.urlHost,
//   //     path:"/productos/listar",
//   //     payload:{
//   //     }
//   //   }
//   // this.peticion.Post(post.host+post.path, post.payload).then(
//   //   (res:any) => {
//   //     console.log(res)
//   //     this.datos = res.data
//   //   }
//   // )
//   // }
//   // AbrirModal(){
//   //   this.cod_prod = ""
//   //   this.nombre = ""
//   //   this.imagen = ""
//   //   this.precio = 0
//   //   this.Idseleccionado = ""
//   //   $('#modalNuevo').modal('show')
//   // }
//   // EditarId(id:string){
//   //   this,this.Idseleccionado =id
//   //   let post = {
//   //     host:this.peticion.urlHost,
//   //     path:"/productos/listarid",
//   //     payload:{
//   //       _id:id
//   //     }
//   //   }
//   // this.peticion.Post(post.host+post.path, post.payload).then(
//   //   (res:any) => {
//   //     console.log(res)
//   //       this.cod_prod = res.data[0].cod_prod
//   //       this.nombre = res.data[0].nombre
//   //       this.precio = res.data[0].precio
//   //       this.imagen = res.data[0].imagen
//   //       $('#modalNuevo').modal('show')
//   //     // if(res.data != undefined){
        
//   //     // }
//   //   }
//   // )
    
//   // }
//   Eliminar(){
//     let post = {
//       host:this.peticion.urlHost,
//       path:"/productos/delete",
//       payload:{
//         _id:this.Idseleccionado
//       }
//     }
//     this.peticion.Post(post.host+post.path, post.payload).then(
//       (res:any) => {
//         console.log(res)
//         if(res.state == true){

//           Swal.fire({
//             icon: "success",
//             title: "Que Bien!",
//             text: res.mensaje,
//           });
//         }
//         else{
//           Swal.fire({
//             icon: "error",
//             title: "Ouchh.",
//             text: res.mensaje,
//           });
//         }
//       })
//   }
// }
