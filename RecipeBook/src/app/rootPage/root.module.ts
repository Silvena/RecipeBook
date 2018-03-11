import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {HeaderComponent} from './header/header.component';
import {WellcomeComponent } from './wellcome/wellcome.component';
import {SharedModule } from '../shared/shared.module';
import {AppRoutingModule } from '../app-routing.module';
import {RecipeService} from '../recipes/recipe.service';
import {DataStorageServise } from '../shared/data-storage.servise';
import {AuthGuard} from '../auth/auth-guard.service';
import {AuthService } from '../auth/auth.service';
import {AboutComponent } from './about/about.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AdminComponent } from '../auth/admin/admin.component';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging-interceptor';
import { NgModel } from '@angular/forms';



@NgModule({
    declarations: [
    HeaderComponent,
    WellcomeComponent,
    AboutComponent,
    AdminComponent
 ],
 imports: [
     SharedModule,
     AppRoutingModule,
     NgbModule
 ],
 exports: [
     AppRoutingModule,
     HeaderComponent,
 ],
 providers: [
    /*RecipeService,
    DataStorageServise,
    AuthService,*/
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
]
})
export class RootModule {}
