import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IonicStorageModule} from '@ionic/storage-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { StartPageRoutingModule } from './start/start-routing.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyByVgfKpTQuIfr8yhA7s7hAnic7vy67U5A",
  authDomain: "we-count-4256c.firebaseapp.com",
  databaseURL: "https://we-count-4256c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "we-count-4256c",
  storageBucket: "we-count-4256c.appspot.com",
  messagingSenderId: "131701347582",
  appId: "1:131701347582:web:9bf4c93bdb900e82f041af",
  measurementId: "G-6VG4MHT6FC"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    StartPageRoutingModule,
    AngularFirestoreModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
}
