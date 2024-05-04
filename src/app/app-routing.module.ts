import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // blank
{path:'',

loadComponent:()=>import('./layouts/blank-layout/blank-layout.component').then((m)=>m.BlankLayoutComponent),
children:[
{path:'',redirectTo:'landing',pathMatch:'full'},
{path:'invest', loadComponent:()=>import('./pages/invest/invest.component').then((m)=>m.InvestComponent),title:'invest'},
{path:'home', loadComponent:()=>import('./pages/home/home.component').then((m)=>m.HomeComponent),title:'Home'},
{path:'about', loadComponent:()=>import('./pages/about/about.component').then((m)=>m.AboutComponent),title:'about'},
{path:'contact-us', loadComponent:()=>import('./pages/contact-us/contact-us.component').then((m)=>m.ContactUsComponent),title:'contact-us'},
{path:'categories', loadComponent:()=>import('./pages/categories/categories.component').then((m)=>m.CategoriesComponent),title:'categories'},
{path:'opportunities/:id', loadComponent:()=>import('./pages/opportunities/opportunities.component').then((m)=>m.OpportunitiesComponent),title:'opportunities'},
{path:'details/:id', loadComponent:()=>import('./pages/details/details.component').then((m)=>m.DetailsComponent),title:'Details'}
// {path:'details', loadComponent:()=>import('./pages/details/details.component').then((m)=>m.DetailsComponent),title:'Details'}

]
},
//auth
{path:'',

loadComponent:()=>import('./layouts/auth-layout/auth-layout.component').then((m)=>m.AuthLayoutComponent),
children:[
{path:'',redirectTo:'landing',pathMatch:'full'},
{path:'landing', loadComponent:()=>import('./pages/landing-page/landing-page.component').then((m)=>m.LandingPageComponent),title:'landing'},
{path:'signIn', loadComponent:()=>import('./pages/sign-in/sign-in.component').then((m)=>m.SignInComponent),title:'SignIn'},
{path:'signUpUser', loadComponent:()=>import('./pages/sign-up-user/sign-up-user.component').then((m)=>m.SignUpUserComponent), title:'SignUpUser'},
{path:'signUpBusiness', loadComponent:()=>import('./pages/sign-up-business/sign-up-business.component').then((m)=>m.SignUpBusinessComponent),title:'SignUpBusiness'},
{path:'forgetpassword', loadComponent:()=>import('./pages/forget-password/forget-password.component').then((m)=>m.ForgetPasswordComponent),title:'forgetPassword'},


]
},





// notFound

// {path:"**",loadComponent:()=>import('./pages/not-fonud/not-fonud.component').then((m)=>m.NotFonudComponent)}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
