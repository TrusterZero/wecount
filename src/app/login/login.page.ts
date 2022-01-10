import {Component, OnInit} from '@angular/core';
import {StorageService} from '../services/storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SummonerInfo} from 'src/models/SummonerInfo';
import {Region} from 'src/models/Region';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  summonerInfo: SummonerInfo = {
    name: '',
    region: Region.EUROPE_WEST
  };


  constructor(public storage: StorageService, public alertController: AlertController, private router: Router) {

  }

  async summonerAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Summoner name missing!',
      buttons: [
        {
          text: 'Proceed',
          role: 'proceed',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Proceed');
          }
        }
      ]
    });

    await alert.present();
  }

  async regionAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Incorrect region!',
      buttons: [
        {
          text: 'Proceed',
          role: 'proceed',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Proceed');
          }
        }
      ]
    });

    await alert.present();
  }

  goToStartMatch() {
    this.router.navigate(['/start']);
  }

  storeSummonerInfo() {
    if (this.summonerInfo.name === '' || this.summonerInfo.name === undefined) {
      this.summonerAlert();
      throw new Error('SummonerName missing');
      console.log('Error: SummonerName missing');

    }
    if (!Object.values(Region).includes(this.summonerInfo.region)) {
      this.regionAlert();
      throw new Error('Incorrect region');
      console.log('Error: Incorrect region');
    }

    this.storage.add('summoner', this.summonerInfo).then(() => {
      this.goToStartMatch();
      this.storage.get('summoner').then((summonerInfo: SummonerInfo) => {
        console.log(`${summonerInfo.name} logged in succesfully on the ${summonerInfo.region} server`);
      });

    });

  }

  ngOnInit() {

  }



}

