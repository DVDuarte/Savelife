import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroDespesasComponent } from './cadastro-despesas/cadastro-despesas.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent }, 
  { path: 'cadastro-despesas', component: CadastroDespesasComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
