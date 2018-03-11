import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingmodule } from './auth-routing.module';



@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        FormsModule,
        AuthRoutingmodule
    ]
})
export class Authmodule {}

