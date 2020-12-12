import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaDoisComponent } from './pagina-dois/pagina-dois.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pagina-dois', component: PaginaDoisComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
