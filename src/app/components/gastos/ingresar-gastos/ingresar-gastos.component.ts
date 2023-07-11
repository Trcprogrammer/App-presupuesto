import { Component } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent {
  textoIncorrecto:boolean;
  gasto:string;
  cantidad:number;




  constructor(private _service:ServicioService ){
    this.textoIncorrecto=false;
    this.gasto='';
    this.cantidad=0;
  }

  
  agregarGastos():void{
    if( this.gasto === '' || this.cantidad < 500 ){
      this.textoIncorrecto=true;
    }else{
     this.textoIncorrecto = false;

      const datos={
          gasto:this.gasto,
          cantidad:this.cantidad
      }

      this._service.restarDatos(datos)


    

    }

  }

}
