import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { SummonerInfo } from 'functions/src/models/SummonerInfo';
import { StorageService } from './storage.service';
import { collection, query, where, getDocs } from "firebase/firestore";
import { AngularFireFunctions } from '@angular/fire/compat/functions';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  getMatch = this.fns.httpsCallable('getMatch')

  constructor(private db: AngularFirestore, private storage: StorageService, private fns: AngularFireFunctions) {
  }
    async searchMatch() {
      // const matches: AngularFirestoreCollection<any> = this.db.collection('matches');
      const summonerInfo: SummonerInfo = await this.storage.get("summoner");
      // const snapshot = await matches.ref.where('participants', 'array-contains', `${summonerInfo.name}`).get();
      // if (snapshot.empty) {
      //   console.log('No matching documents.');
      //   return;
      // }
      // matches.subscribe(console.log);

      this.getMatch(summonerInfo)
      console.log(await this.getMatch(summonerInfo).toPromise())
    }
}


// https://us-central1-we-count-4256c.cloudfunctions.net/getMatch
