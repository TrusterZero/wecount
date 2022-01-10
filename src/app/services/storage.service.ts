import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import { SummonerInfo } from 'src/models/SummonerInfo';



@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.storage.create();
  }

  add(key: string, summonerInfo: SummonerInfo): Promise<void> {
    return this.storage.set(key, summonerInfo);
  }

  get(key: string): Promise<SummonerInfo> {
    return this.storage.get(key);
  }

  delete(key: string): Promise<SummonerInfo> {
      return this.storage.remove(key);
  }
}

//
// this.add('summoner', {
//   summonerName: 'kees',
//   region: 'euw'
// })
//
// this.add('andere summoner', {
//   summonerName: 'kevin',
//   region: 'euw'
// })
//
// this.get('summoner')
