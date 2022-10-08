import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { PaginaNonTrovataComponent } from './pagina-non-trovata/pagina-non-trovata.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"products", component:ProductsComponent},
  {path:"pagina-non-trovata", component:PaginaNonTrovataComponent},
  {path:"**", redirectTo:"pagina-non-trovata"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
