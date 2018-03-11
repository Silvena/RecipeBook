import { Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import * as admin from 'firebase-admin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
   firebase.initializeApp({    // Initialize Firebase
    apiKey: 'AIzaSyDrzCTa5b4uDG6103VETDwZcgrG-GWmwJQ',
    authDomain: 'wizz-lib.firebaseapp.com',
    databaseURL: 'https://wizz-lib.firebaseio.com',
    projectId: 'wizz-lib',
    storageBucket: 'wizz-lib.appspot.com',
    messagingSenderId: '663118120417'
   });

  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
