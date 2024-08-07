import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { LocationComponent } from './component/location/location.component';
import { CarrouselComponent } from './component/bodycomponents/carrousel/carrousel.component';
import { PromocardComponent } from './component/bodycomponents/promocard/promocard.component';
import { CardsComponent } from './component/bodycomponents/cards/cards.component';
import { Navbar1Component } from './component/header/navcomponents/navbar1/navbar1.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { MenuComponent } from './component/menu/menu.component';
import { ProductosComponent } from './component/productos/productos.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { InterceptorService } from './servicios/interceptor.service';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { MisdatosComponent } from './component/misdatos/misdatos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtncollideComponent } from './component/menu/btncollide/btncollide.component';
import { ActivarComponent } from './component/activar/activar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    AboutUsComponent,
    LocationComponent,
    CarrouselComponent,
    PromocardComponent,
    CardsComponent,
    Navbar1Component,
    MenuComponent,
    ProductosComponent,
    CategoriasComponent,
    UsuariosComponent,
    MisdatosComponent,
    BtncollideComponent,
    ActivarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
