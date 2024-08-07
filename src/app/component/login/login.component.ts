import { provideCloudinaryLoader } from '@angular/common';
import { Component, Host, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionService } from '../../servicios/peticion.service';



declare let $:any
declare let Swal:any


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{


  constructor(private peticion: PeticionService, private router:Router){}

  email:string = ""
  password:string =""

login(){

  let post = {
    Host:this.peticion.urlHost,
    path:"/usuarios/login",
    payload:{
      email:this.email,
      password:this.password
  }}
  this.peticion.Post(post.Host + post.path,post.payload).then((res:any) =>{
    
    if(res.state == true){

      Swal.fire({
        icon: "success",
        title: "Bienvenido!",
        text: res.mensaje,
      });

      this.router.navigate(["dashboard"])

    }
    else {

      Swal.fire({
        icon: "error",
        title: "Ouuch!",
        text: res.mensaje,
      });
    }
    }
  )
}

}
