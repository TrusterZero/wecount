import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SummonerIconComponent } from './summoner-icon.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [SummonerIconComponent],
  exports: [SummonerIconComponent],
})
export class SummonerIconModule {}
