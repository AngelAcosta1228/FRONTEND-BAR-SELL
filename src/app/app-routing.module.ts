import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { LocationComponent } from './component/location/location.component';
import { CarrouselComponent } from './component/bodycomponents/carrousel/carrousel.component';
import { CardsComponent } from './component/bodycomponents/cards/cards.component';
import { PromocardComponent } from './component/bodycomponents/promocard/promocard.component';
import { ProductosComponent } from './component/productos/productos.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { MisdatosComponent } from './component/misdatos/misdatos.component';
import { ActivarComponent } from './component/activar/activar.component';
import { CarritoComponent } from './component/carrito/carrito.component';

const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"login", component:LoginComponent, pathMatch:"full"},
  {path:"registro", component:RegistroComponent, pathMatch:"full"},
  {path:"dashboard", component:DashboardComponent, pathMatch:"full"},
  {path:"about_us", component:AboutUsComponent, pathMatch:"full"},
  {path:"location", component:LocationComponent, pathMatch:"full"},
  {path:"carrousel", component:CarrouselComponent, pathMatch:"full"},
  {path:"cards", component:CardsComponent, pathMatch:"full"},
  {path:"categorias", component:CategoriasComponent, pathMatch:"full"},
  {path:"promocards", component:PromocardComponent, pathMatch:"full"},
  {path:"usuarios", component:UsuariosComponent, pathMatch:"full"},
  {path:"misdatos", component:MisdatosComponent, pathMatch:"full"},
  {path:"activar", component:ActivarComponent, pathMatch:"full"},
  {path:"activar/:correo/:codigo", component:ActivarComponent, pathMatch:"full"},
  {path:"productos", component:ProductosComponent, pathMatch:"full"},
  {path:"carrito", component:CarritoComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
