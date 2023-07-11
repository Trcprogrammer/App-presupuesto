import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GastosComponent } from './components/gastos/gastos.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { IngresarGastosComponent } from './components/gastos/ingresar-gastos/ingresar-gastos.component';
import { ListarGastosComponent } from './components/gastos/listar-gastos/listar-gastos.component';
import { ServicioService } from './service/servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    IngresarComponent,
    IngresarGastosComponent,
    ListarGastosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
