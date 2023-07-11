import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {

  constructor (private _service:ServicioService, private router:Router ){}
  ngOnInit():void{
    
    if(this._service.cantidad === 0){
      this.router.navigate(['/ingresar'])
    }
  }


}
