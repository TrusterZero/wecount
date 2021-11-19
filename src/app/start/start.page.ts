import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AlertController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { StorageService } from '../services/storage.service';
import { SummonerInfo } from 'functions/src/models/SummonerInfo';
import { MatchService } from '../services/match.service';


@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})

export class StartPage implements OnInit {

  myInput = '';
  constructor(private functions: AngularFireFunctions, private alertController: AlertController, private storage: StorageService, private match: MatchService) {}

  // callCloudFunction() {
  //   const callable = this.functions.httpsCallable('getMatch');
  //   const obs = callable({ coolMsg: this.myInput });
  //   obs.subscribe(async res => {
  //     const alert = await this.alertController.create({
  //       header: `Time:`,
  //       message: res.msg,
  //       buttons: ['OK']
  //     });
  //     await alert.present();
  //   });
  // }

  goToMatch(){
    this.match.searchMatch()
  }

  ngOnInit() {
  }

}


// de matchservice weghalen om alles weer te laten werken.
