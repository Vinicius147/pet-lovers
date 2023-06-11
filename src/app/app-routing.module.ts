import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueroAdotarComponent } from './quero-adotar/quero-adotar.component';
import { IndexComponent } from './index/index.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent},
  { path: 'quero-adotar', component: QueroAdotarComponent},
  { path: 'forms', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
