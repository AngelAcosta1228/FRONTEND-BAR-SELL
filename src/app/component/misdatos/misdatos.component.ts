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
  usuarios:any[] = []
  Idusuario:String =""
  ciudad:String = ""
  confirmpassword: any;
  
  cargarTodas(){

    let post = {
      Host: this.peticion.urlHost,
      path:"/usuarios/misdatos",
      payload:{
      }
    }
    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) => {
        console.log(res)
        this.nombre = res.usuarios[0].nombre
          this.email = res.usuarios[0].email
          this.direccion = res.usuarios[0].direccion
          this.ciudad = res.usuarios[0].ciudad
          this.telefono=res.usuarios[0].telefono
          this.rol= res.usuarios[0].rol
          this.estado = res.usuarios[0].estado
      }
  )}

 ActualizarDatos(){
  if(this.password != this.confirmpassword){
    Swal.fire({
      title: "Ouch!",
      text: "Verifica el password, no coincide",
      icon: "error"
    });
  }else {
    let post = {
      Host: this.peticion.urlHost,
      path:"/usuarios/actualizardatos",
      payload:{
        email:this.email,
        telefono:this.telefono, 
        direccion:this.direccion,
        ciudad:this.ciudad,
        password:this.password
      }
    }
    this.peticion.Post(post.Host+post.path, post.payload).then(
      (res:any) => {
        
        if(res.state == true){
          Swal.fire({
            title: "Que bien!",
            text: res.mensaje,
            icon: "success"
          });
        }else{
          Swal.fire({
            title: "Ouch!",
            text: res.mensaje,
            icon: "error"
          });
        }
      }
    )

  }
}
}

