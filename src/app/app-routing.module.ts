import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [

  { path :'',   redirectTo:'/ingresar',  pathMatch:'full' },
  { path:'ingresar', component: IngresarComponent  },
    {path:'gastar', component:GastosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
