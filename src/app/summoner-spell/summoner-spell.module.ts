import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SummonerSpellComponent } from './summoner-spell.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [SummonerSpellComponent],
  exports: [SummonerSpellComponent],
})
export class SummonerSpellModule {}
