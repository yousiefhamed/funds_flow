import { authGuard } from './../core/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminGuard } from 'src/core/admin.guard';

const routes: Routes = [

  // blank
  {
    path: '',
     canActivate:[authGuard],
    loadComponent: () =>
      import('./layouts/blank-layout/blank-layout.component').then(
        (m) => m.BlankLayoutComponent
      ),
    children: [
      {path:'',redirectTo:'home',pathMatch:'full'},
      {
        path: 'invest',
        loadComponent: () =>
          import('./pages/invest/invest.component').then(
            (m) => m.InvestComponent
          ),
        title: 'invest',
      },
      {
        path: 'investNaw',
        loadComponent: () =>
          import('./pages/invest-naw/invest-naw.component').then(
            (m) => m.InvestNawComponent
          ),
        title: 'investNaw',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((m) => m.HomeComponent),
        title: 'Home',
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about/about.component').then((m) => m.AboutComponent),
        title: 'about',
      },
      {
        path: 'test',
        // canActivate:[adminGuard],
        loadComponent: () =>
          import('./test/test.component').then((m) => m.TestComponent),
        title: 'test',
    
      },
      {
        path: 'manageBussiness ',
        // canActivate:[adminGuard],
        loadComponent: () =>
          import('./pages/manage-bussiness/manage-bussiness.component').then((m) => m.ManageBussinessComponent),
        title: 'ManageBussiness ',
    
      },
      {
        path: 'order',
        loadComponent: () =>
          import('./order/order.component').then((m) => m.OrderComponent),
        title: 'order',
      },
      {
        path: 'order/:session_id',
        loadComponent: () =>
          import('./order/order.component').then((m) => m.OrderComponent),
        title: 'order',
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./pages/admin/admin.component').then((m) => m.AdminComponent),
        title: 'admin',
      },
      {
        path: 'wating',
        loadComponent: () =>
          import('./pages/wating/wating.component').then(
            (m) => m.WatingComponent
          ),
        title: 'wating',
      },
      {
        path: 'about-user',
        loadComponent: () =>
          import('./pages/about-user/about-user.component').then(
            (m) => m.AboutUserComponent
          ),
        title: 'about-user',
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./pages/contact-us/contact-us.component').then(
            (m) => m.ContactUsComponent
          ),
        title: 'contact-us',
      },
      {
        path: 'cancel',
        loadComponent: () =>
          import('./pages/cancel/cancel.component').then(
            (m) => m.CancelComponent
          ),
        title: 'cancel',
      },
      {
        path: 'manageUsers',
        loadComponent: () =>
          import('./manage-users/manage-users.component').then(
            (m) => m.ManageUsersComponent
          ),
        title: 'ManageUsers',
      },
      {
        path: 'watingDetails/:uuid',
        loadComponent: () =>
          import('./pages/wating-details/wating-details.component').then(
            (m) => m.WatingDetailsComponent
          ),
        title: 'wating',
      },     
      
      {
        path: 'userProfile/:id',
        loadComponent: () =>
          import('./pages/user-profile/user-profile.component').then(
            (m) => m.UserProfileComponent
          ),
        title: 'userProfile',
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./pages/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
        title: 'categories',
      },
      {
        path: 'opportunities/:uuid',
        loadComponent: () =>
          import('./pages/opportunities/opportunities.component').then(
            (m) => m.OpportunitiesComponent
          ),
        title: 'opportunities',
      },
      {
        path: 'details/:uuid',
        loadComponent: () =>
          import('./pages/details/details.component').then(
            (m) => m.DetailsComponent
          ),
        title: 'Details',
      },
      {
        path: 'detailsForm/:uuid',
        loadComponent: () =>
          import('./pages/details-form/details-form.component').then(
            (m) => m.DetailsFormComponent
          ),
        title: 'Details_form',
      },
      // {path:'details', loadComponent:()=>import('./pages/details/details.component').then((m)=>m.DetailsComponent),title:'Details'}
    ],
  },


  //auth
  {
    path: '',

    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
      {
        path: 'landing',
        loadComponent: () =>
          import('./pages/landing-page/landing-page.component').then(
            (m) => m.LandingPageComponent
          ),
        title: 'landing',
      },
      {
        path: 'signIn',
        loadComponent: () =>
          import('./pages/sign-in/sign-in.component').then(
            (m) => m.SignInComponent
          ),
        title: 'SignIn',
      },
      {
        path: 'signUpUser',
        loadComponent: () =>
          import('./pages/sign-up-user/sign-up-user.component').then(
            (m) => m.SignUpUserComponent
          ),
        title: 'SignUpUser',
      },
      {
        path: 'signUpBusiness',
        loadComponent: () =>
          import('./pages/sign-up-business/sign-up-business.component').then(
            (m) => m.SignUpBusinessComponent
          ),
        title: 'SignUpBusiness',
      },
      {
        path: 'forgetpassword',
        loadComponent: () =>
          import('./pages/forget-password/forget-password.component').then(
            (m) => m.ForgetPasswordComponent
          ),
        title: 'forgetPassword',
      },
    ],
  },


  // notFound

  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-fonud/not-fonud.component').then(
        (m) => m.NotFonudComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
