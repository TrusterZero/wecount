import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IbolToggleComponent } from './ibol-toggle.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [IbolToggleComponent],
  exports: [IbolToggleComponent],
})
export class IbolToggleModule {}
