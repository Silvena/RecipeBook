import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';
import { error } from 'util';

@Injectable()
export class AuthService {
    constructor(private router: Router,
         private store: Store<fromApp.AppState>) {}

    registerUser(email: string, password: string) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
          user => {
            this.store.dispatch(new AuthActions.Signup());
            firebase.auth().currentUser.getToken()
            .then(
                (token: string) => {
                    this.store.dispatch(new AuthActions.SetToken(token));
                }
            );
          }
      )
      .catch (
          err =>
          console.log(error)
      );
    }

    loginUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.store.dispatch(new AuthActions.Signin());
                this.router.navigate(['/']);
                firebase.auth().currentUser.getToken()
                .then(
                    (token: string) => {
                    this.store.dispatch(new AuthActions.SetToken(token));
                    }
                );
            }
        )
        .catch(
            err =>
            console.log(error)
        );
    }
    logout() {
        firebase.auth().signOut();
        this.store.dispatch(new AuthActions.Logout());
    }
/*
    getToken() {
      firebase.auth().currentUser.getIdToken()
      .then(
            (token: string) => this.token = token
        );
    return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
    */
}
