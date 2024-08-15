import { Component } from '@angular/core';
import { PeticionService } from '../../servicios/peticion.service';


declare let $:any
declare let Swal:any

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor( private peticion:PeticionService) {}
  
  ngOnInit(): void {
    this.cargarTodascategorias()
    this.cargarTodas()
  }
  
  cod_prod:string = ""
  cod_cat:string = ""
  precio:Number= 0
  nombre:string = ""
  imagen:string = ""
  color : string = "#ebebeb"
  estado:number = 1
  datos:any[] = []
  Idseleccionado:String =""
  datoscategorias:any[] = []
  
  
  cargarTodascategorias(){

    let post = {
      host:this.peticion.urlHost,
      path:"/categorias/listar",
      payload:{
      }
    }
  this.peticion.Post(post.host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
      
      this.datoscategorias = res.data
      console.log(this.datoscategorias)
    }
    
  )
  }
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
  AbrirModal(){
    this.cod_cat = ""
    this.cod_prod = ""
    this.nombre = ""
    this.estado = 1
    this.imagen = ""
    this.color = "#ebebeb"
    this.precio = 0
    this.Idseleccionado = ""
    $('#modalNuevo').modal('show')
  }
  Guardar(){

    let post = {
      host:this.peticion.urlHost,
      path:"/productos/save",
      payload:{
        cod_prod:this.cod_prod,
        cod_cat:this.cod_cat,
        precio:this.precio,
        nombre:this.nombre,
        estado:this.estado,
        imagen:this.imagen,
        color:this.color
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
      path:"/productos/listarid",
      payload:{
        _id:id
      }
    }
  this.peticion.Post(post.host+post.path, post.payload).then(
    (res:any) => {
      console.log(res)
        this.cod_cat = res.data[0].cod_cat
        this.cod_prod = res.data[0].cod_prod
        this.nombre = res.data[0].nombre
        this.precio = res.data[0].precio
        this.estado = res.data[0].estado
        this.imagen = res.data[0].imagen
        this.color = res.data[0].color
        $('#modalNuevo').modal('show')
      // if(res.data != undefined){
        
      // }
    }
  )
    
  }
  Eliminar(){
    let post = {
      host:this.peticion.urlHost,
      path:"/productos/delete",
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
      path:"/productos/update",
      payload:{
        _id:this.Idseleccionado,
        cod_cat:this.cod_cat,
        nombre:this.nombre,
        precio:this.precio,
        estado:this.estado,
        imagen: this.imagen,
        color: this.color
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
