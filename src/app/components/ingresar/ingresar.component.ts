import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {

  cantidad:number=0;
 validar:boolean=false;


constructor( private router: Router,  private _service:ServicioService  ){
}

 enviar():void{



  if(this.cantidad < 500){
    this.validar=true;

  }else{
    this.validar=false;
    this.router.navigate(['/gastar'])
    this._service.cantidad=this.cantidad;
  
  }

 }


  

  


}
