import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  cantidad:number;
  
  private serve$= new Subject <any>()


  constructor(){
    this.cantidad=0;
  }

  restarDatos(datos:any){
      this.serve$.next(datos)




  }

  getDatos():Observable<any>{
    return this.serve$.asObservable()

  }




   


  





}
