import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { SharedService } from './services/shared.service';

const firebaseConfig = {
  apiKey: "AIzaSyCtHbi9iGFj7MSbW_Rf48HJ7RHuwgpnqPM",
  authDomain: "app-tareas-b0355.firebaseapp.com",
  projectId: "app-tareas-b0355",
  storageBucket: "app-tareas-b0355.appspot.com",
  messagingSenderId: "514989125512",
  appId: "1:514989125512:web:c8d629d4db1ddb52dad43d"
}; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ], 
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
