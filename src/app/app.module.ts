import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {

  apiKey: "AIzaSyC47Dl5ZLFcm4YQD0FXvhhXoKLP5A4xh-M",
  authDomain: "firestore-c7392.firebaseapp.com",
  databaseURL: "https://firestore-c7392.firebaseio.com",
  projectId: "firestore-c7392",
  storageBucket: "firestore-c7392.appspot.com",
  messagingSenderId: "612582241978"

}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
