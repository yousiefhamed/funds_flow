import { provideRouter } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MyHttpInterceptor } from './my-http.interceptor';
import { FooterComponent } from './pages/footer/footer.component';
import { importProvidersFrom } from '@angular/core';
@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FooterComponent
  ],
  providers: [


    {
      provide:HTTP_INTERCEPTORS , useClass:MyHttpInterceptor ,multi: true
    },
  ],
  bootstrap: [AppComponent],
  






  
})
export class AppModule {}
