import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-btncollide',
  templateUrl: './btncollide.component.html',
  styleUrls: ['./btncollide.component.css']
})
export class BtncollideComponent {

  public getScreenWidth: any;
  public getScreenHeight: any;

  statemenu:boolean = false

  ngOninit():any{
    this.getScreenHeight = window.innerHeight
    this.getScreenWidth = window.innerWidth
  }

  Switchmenu(){
  
    if(this.statemenu == true){
      this.statemenu = false
      let mimenu:any = document.getElementById("menu-box-dsb")
      mimenu.style.display = 'none'
      // let ventana:any = document.getElementsByClassName("window")
      // ventana[0].style.width = '99%'
     }
    else {
      this.statemenu = true
      let mimenu:any = document.getElementById("menu-box-dsb")
      mimenu.style.display = 'block'
      // let ventana:any = document.getElementsByClassName("window")
      // ventana[0].style.width = '95%'
    }
    
  
  }

}
