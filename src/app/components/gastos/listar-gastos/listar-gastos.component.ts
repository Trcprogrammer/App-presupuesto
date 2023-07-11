import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit, OnDestroy  {
  cantidad:any; 
  restante:any
  gasto:any;
  Subscription:Subscription;
  almacenar:any[]=[];




  constructor(private _service:ServicioService){
    this.restante=_service.cantidad;
    this.Subscription=this._service.getDatos().subscribe( dato=>{
      this.almacenar.push(dato)
      this.restante=dato.cantidad - this.cantidad;

  
    })



  }
  ngOnDestroy(): void {
    this.Subscription.unsubscribe
    
  }


   



ngOnInit(){

  this.cantidad=this._service.cantidad;

}


  

}
