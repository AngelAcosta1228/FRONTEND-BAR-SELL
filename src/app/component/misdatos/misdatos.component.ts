import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../../servicios/peticion.service';


declare let $:any
declare let Swal:any


@Component({
  selector: 'app-misdatos',
  templateUrl: './misdatos.component.html',
  styleUrls: ['./misdatos.component.css']
})
export class MisdatosComponent implements OnInit{


  ngOnInit(): void {
    this.cargarTodas
    this.cargarTodas()
  }
  
  constructor (private peticion:PeticionService){}

  email:string = ""
  password:any = ""
  nombre:string = ""
  rol:string = '2'
  direccion: any = ""
  telefono:any = ""
  estado:string = '0'
  data:any[] = []
  Idusuario:String =""
  ciudad:String = ""
  
  cargarTodas(){

    let post = {
      host:this.peticion.urlHost,
      path:"/usuarios/misdatos",
      payload:{
      }
    }
  this.peticion.Post(post.host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)

      this.nombre = res.data[0].nombre
      this.email = res.data[0].email
      this.estado = res.data[0].estado
      this.direccion = res.data[0].direccion
      this.telefono = res.data[0].telefono
      this.rol = res.data[0].rol
      this.Idusuario = res.data._id

    }
  )}

 ActualizarDatos(){
  
//   let post = {
//     host:this.peticion.urlHost,
//     path:"/usuarios/actualizardatos",
//     payload{
//       nombre:this.nombre,

//     }
    
//   }
// this.peticion.Post(post.host+post.path, post.payload).then(
//   (res:any) => {
//     console.log(res)
//     this.email = res.data[0].email
//     this.nombre = res.data[0].nombre
//     this.estado = res.data[0].estado
//     $('#modalNuevo').modal('show')
//   }
// )

}
}
