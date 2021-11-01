import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/auth/login/login.component'
import { RegisterComponent } from './auth/auth/register/register.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo:"login"},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
