import { Component } from '@angular/core';
import { PeticionService } from '../../../servicios/peticion.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor (private peticion:PeticionService){}

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

  Comprar(){

  }

}
