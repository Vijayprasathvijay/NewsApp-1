import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessregisterComponent } from './successregister/successregister.component';

const routes: Routes = [
  {path:"user-reg" , component : RegisterComponent},
  {path:"login" , component : LoginComponent},
  {path:"header" , component:HeaderComponent},
  {path:"success",component:SuccessregisterComponent},
  {path:'', redirectTo: "/header", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
