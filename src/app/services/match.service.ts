import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { SummonerInfo } from 'functions/src/models/SummonerInfo';
import { StorageService } from './storage.service';
import { collection, query, where, getDocs } from "firebase/firestore";


@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private db: AngularFirestore, private storage: StorageService) {
  }
    async searchMatch(){
      const matches: AngularFirestoreCollection<any> = this.db.collection('matches');
      const summonerInfo: SummonerInfo = await this.storage.get("summoner");
      const snapshot = await matches.ref.where('participants', 'array-contains', `${participant.name}`).get();
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      matches.subscribe(console.log);
    }
}
