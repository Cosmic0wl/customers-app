import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
{
	path: "", component: HomePageComponent
},
{
	path: "form", component: CustomerComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
