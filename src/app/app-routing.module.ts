import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCidadeComponent } from './add-cidade/add-cidade.component';
import { CidadeComponent } from './cidade/cidade.component';



const routes: Routes = [
  {path:'', component: CidadeComponent},
  {path:'add', component: AddCidadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
