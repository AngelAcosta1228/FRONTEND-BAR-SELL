import { Component, Host, OnInit } from '@angular/core';
import { PeticionService } from '../../servicios/peticion.service';
import { Router } from '@angular/router';

declare let $:any
declare let Swal:any

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private peticion:PeticionService, private router:Router){}

  nombre:string ="cargando..."
  rol:string ="cargando..."


  ngOnInit():void {
    this.cargarestado()
  }




  cargarestado(){

    let post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/state",
      payload:{

    }}
     
    this.peticion.Post(post.Host + post.path,post.payload).then((res:any) =>{
      console.log(res)
      if (res.nombre == "" || res.nombre == undefined){
        this.router.navigate(["login"])
      }
      this.nombre = res.nombre
      this.rol = res.rol
    })

  }
  Cerrarsession(){

    let post = {
      Host:this.peticion.urlHost,
      path:"/usuarios/logout",
      payload:{

    }}
     
    this.peticion.Post(post.Host + post.path,post.payload).then((res:any) =>{
      console.log(res)
      
      if(res.state == true){

        Swal.fire({
          icon: "success",
          title: "Bienvenido!",
          text: res.mensaje,
        });
        this.router.navigate(["login"])
      }
      else {
  
        Swal.fire({
          icon: "error",
          title: "Ouuch!",
          text: res.mensaje,
        });
      }
    })

  }


}