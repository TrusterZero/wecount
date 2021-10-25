import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {StartPageRoutingModule} from './start-routing.module';
import {StartPage} from './start.page';
import {AngularFireModule} from '@angular/fire/compat/'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartPageRoutingModule,
    AngularFireModule,
    HttpClientModule
  ],
  declarations: [StartPage]
})
export class StartPageModule {
}
