import { Component } from '@angular/core';
import { PeticionService } from '../../servicios/peticion.service';



declare let $:any
declare let Swal:any

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {

  constructor (private peticion:PeticionService){}

  ngOnInit(): void {
    this.cargarTodas()
  }

  cod_cat:string = ""
  nombre:string = ""
  estado:number = 1
  datos:any[] = []
  Idseleccionado:String =""

  cargarTodas(){

    let post = {
      host:this.peticion.urlHost,
      path:"/categorias/listar",
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
  AbrirModal(){
    this.cod_cat = ""
    this.nombre = ""
    this.estado = 1
    this.Idseleccionado = ""
    $('#modalNuevo').modal('show')
  }
  Guardar(){

    let post = {
      host:this.peticion.urlHost,
      path:"/categorias/save",
      payload:{
        cod_cat:this.cod_cat,
        nombre:this.nombre,
        estado:this.estado
      }
    }
  this.peticion.Post(post.host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.state == true){

        Swal.fire({
          icon: "success",
          title: "Que Bien!",
          text: res.mensaje,
        });

        $('#modalNuevo').modal('hide')
        this.cargarTodas()
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Ouchh.",
          text: res.mensaje,
        });
      }
    })
  }
  EditarId(id:string){
    this,this.Idseleccionado =id
    let post = {
      host:this.peticion.urlHost,
      path:"/categorias/listarid",
      payload:{
        _id:id
      }
    }
  this.peticion.Post(post.host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      this.cod_cat = res.data[0].cod_cat
      this.nombre = res.data[0].nombre
      this.estado = res.data[0].estado
      $('#modalNuevo').modal('show')
    }
  )
    
  }
  Eliminar(){
    let post = {
      host:this.peticion.urlHost,
      path:"/categorias/delete",
      payload:{
        _id:this.Idseleccionado
      }
    }
    this.peticion.Post(post.host+post.path, post.payload).then(
      (res:any) => {
        console.log(res)
        if(res.state == true){

          Swal.fire({
            icon: "success",
            title: "Que Bien!",
            text: res.mensaje,
          });

          $('#modalNuevo').modal('hide')
          this.cargarTodas()
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Ouchh.",
            text: res.mensaje,
          });
        }
      })
  }
  Actualizar(){

    let post = {
      host:this.peticion.urlHost,
      path:"/categorias/update",
      payload:{
        _id:this.Idseleccionado,
        nombre:this.nombre,
        estado:this.estado
      }
    }
  this.peticion.Post(post.host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      if(res.state == true){

        Swal.fire({
          icon: "success",
          title: "Que Bien!",
          text: res.mensaje,
        });

        $('#modalNuevo').modal('hide')
        this.cargarTodas()
      }
      else{
        Swal.fire({
          icon: "error",
          title: "Ouchh.",
          text: res.mensaje,
        });
      }
    })
  }

}
