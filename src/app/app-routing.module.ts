import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
{path:'',

loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
children:[
{path:'',redirectTo:'home',pathMatch:'full'},
// {path:'landing', loadComponent:()=>import('./pages/landing-page/landing-page.component').then((m)=>m.LandingPageComponent),title:'landing'},

{path:'home', loadComponent:()=>import('./pages/home/home.component').then((m)=>m.HomeComponent),title:'Home'}
]
},
{path:'',

loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
children:[
{path:'',redirectTo:'signin',pathMatch:'full'},
{path:'signIn', loadComponent:()=>import('./pages/sign-in/sign-in.component').then((m)=>m.SignInComponent),title:'SignIn'},
{path:'signUpUser', loadComponent:()=>import('./pages/sign-up-user/sign-up-user.component').then((m)=>m.SignUpUserComponent), title:'SignUpUser'},
{path:'signUpBusiness', loadComponent:()=>import('./pages/sign-up-business/sign-up-business.component').then((m)=>m.SignUpBusinessComponent),title:'SignUpBusiness'},
{path:'forgetpassword', loadComponent:()=>import('./pages/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent),title:'forgetPassword'},


]
},












// {path:"**",loadComponent:()=>import('./pages/not-fonud/not-fonud.component').then((m)=>m.NotFonudComponent)}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
