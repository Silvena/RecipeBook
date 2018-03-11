import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule} from './shopping-list/shopping.module';
import { Authmodule } from './auth/auth.module';
import { RootModule } from './rootPage/root.module';
import { reducers} from './store/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AuthEffects } from './auth/store/auth.effects';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  // Initialize Firebase
    apiKey: 'AIzaSyDrzCTa5b4uDG6103VETDwZcgrG-GWmwJQ',
    authDomain: 'wizz-lib.firebaseapp.com',
    databaseURL: 'https://wizz-lib.firebaseio.com',
    projectId: 'wizz-lib',
    storageBucket: 'wizz-lib.appspot.com',
    messagingSenderId: '663118120417'
   };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ShoppingModule,
    Authmodule,
    RootModule,
    NgbModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
