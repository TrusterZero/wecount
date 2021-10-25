import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})

export class StartPage implements OnInit {
  myInput = '';

  constructor(private functions: AngularFireFunctions, private alertController: AlertController) {}

  callCloudFunction() {
    // Use the function name from Firebase
    const callable = this.functions.httpsCallable('getMatch');

    // Create an Observable and pass any data you want to the function
    const obs = callable({ coolMsg: this.myInput });

    obs.subscribe(async res => {
      const alert = await this.alertController.create({
        header: `Time:`,
        message: res.msg,
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  ngOnInit() {
  }

}
