import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatchPageRoutingModule } from './match-routing.module';

import { MatchPage } from './match.page';
import { IbolToggleModule } from '../ibol-toggle/ibol-toggle.module';
import {SummonerSpellModule} from "../summoner-spell/summoner-spell.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatchPageRoutingModule,
    IbolToggleModule,
    SummonerSpellModule,
  ],
  declarations: [MatchPage]
})
export class MatchPageModule {}
