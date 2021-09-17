import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCidadeComponent } from './add-cidade/add-cidade.component';
import { CidadeComponent } from './cidade/cidade.component';
import { TemperaturasComponent } from './temperaturas/temperaturas.component';



const routes: Routes = [
  {path:'', component: CidadeComponent},
  {path:'add', component: AddCidadeComponent},
  {path:'cidade/:nome', component:TemperaturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
