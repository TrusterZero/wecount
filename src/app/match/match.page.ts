import {Component, Input, OnInit} from '@angular/core';
import {MatchService} from '../services/match.service';
import {Match} from '../../../functions/src/models/Match';

@Component({
  selector: 'app-match',
  templateUrl: './match.page.html',
  styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {
  ibolActive: boolean[] = new Array(5).fill(false);
  match: Match;

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.matchService.searchMatch().then((match: Match) => {
      this.match = match;
    });
    matchData.participants.forEach((p) => {
      console.log(p);
    });
  }

  toggleIbol(index: number, $event: boolean) {
    this.ibolActive[index] = $event;
  }

}

const matchData = {
  gameId: 5622949057,
  mapId: 11,
  gameMode: 'CLASSIC',
  gameType: 'MATCHED_GAME',
  gameQueueConfigId: 420,
  participants: [
    {
      teamId: 100,
      spell1Id: 3,
      spell2Id: 4,
      championId: 412,
      profileIconId: 3502,
      summonerName: 'Cranberry Juice',
      bot: false,
      summonerId: '3rP7o2GRqHSxx6ZBxK83xXrmWUMaGz7JsjmgA0QEWnNDdeo',
      gameCustomizationObjects: [],
      perks: {
        perkIds: [
          8465,
          8463,
          8473,
          8242,
          8345,
          8347,
          5007,
          5002,
          5002,
        ],
        perkStyle: 8400,
        perkSubStyle: 8300,
      },
    },
    {
      teamId: 100,
      spell1Id: 4,
      spell2Id: 14,
      championId: 157,
      profileIconId: 1386,
      summonerName: 'MouHSsiNe3',
      bot: false,
      summonerId: 'j_jluSD-93W6dRAWFwPgVaI8vlFw7WjGD0fLN6D2GBb6-INW',
      gameCustomizationObjects: [],
      perks: {
        perkIds: [
          8010,
          9111,
          9104,
          8014,
          8473,
          8446,
          5005,
          5008,
          5003,
        ],
        perkStyle: 8000,
        perkSubStyle: 8400,
      },
    },
    {
      teamId: 100,
      spell1Id: 4,
      spell2Id: 7,
      championId: 67,
      profileIconId: 4893,
      summonerName: 'Karako',
      bot: false,
      summonerId: 'PaOm0n2wz48KxPO29ihSvw80jguyFyHbx9IR49_RG8iyGtU',
      gameCustomizationObjects: [],
      perks: {
        perkIds: [
          8008,
          9111,
          9104,
          8014,
          8143,
          8135,
          5005,
          5008,
          5002,
        ],
        perkStyle: 8000,
        perkSubStyle: 8100,
      },
    },
    {
      teamId: 100,
      spell1Id: 14,
      spell2Id: 11,
      championId: 9,
      profileIconId: 787,
      summonerName: 'Sràw',
      bot: false,
      summonerId: 'ZUKxU0TJQNVithWvdneCUDGTwWWgTw4MT1ObE0qXX-kB4uIN',
      gameCustomizationObjects: [],
      perks: {
        perkIds: [
          8112,
          8126,
          8138,
          8106,
          8347,
          8313,
          5008,
          5008,
          5002,
        ],
        perkStyle: 8100,
        perkSubStyle: 8300,
      },
    },
    {
      teamId: 100,
      spell1Id: 4,
      spell2Id: 14,
      championId: 875,
      profileIconId: 4957,
      summonerName: 'KRXZT',
      bot: false,
      summonerId: '8w_XQjkjVspT-PDZsv68czowmpZGJtikFwUgXP8zMpM4EtIJ',
      gameCustomizationObjects: [],
      perks: {
        perkIds: [
          8008,
          9111,
          9104,
          8299,
          8444,
          8453,
          5005,
          5008,
          5002,
        ],
        perkStyle: 8000,
        perkSubStyle: 8400,
      },
    },
    {
      teamId: 200,
      spell1Id: 7,
      spell2Id: 4,
      championId: 222,
      profileIconId: 3545,
      summonerName: 'twitchpopshot9',
      bot: false,
      summonerId: 'LVPmYhMHLNMrqtU4Cqy4ZNsLo6qaKA6M07MTIoYQe504wBz_mKs3bgcStQ',
      gameCustomizationObjects: [],
      perks: {
        perkIds: [
          8008,
          8009,
          9103,
          8014,
          8304,
          8345,
          5005,
          5008,
          5002,
        ],
        perkStyle: 8000,
        perkSubStyle: 8300,
      },
    },
    {
      teamId: 200,
      spell1Id: 4,
      spell2Id: 3,
      championId: 25,
      profileIconId: 539,
      summonerName: 'Jorenator',
      bot: false,
      summonerId: 'e18LQS8Wl6vtRu3JMuDWXepNhsbnh9qmVlqcMd_1Zt_FBBw',
      gameCustomizationObjects: [],
      perks: {
        perkIds: [
          8214,
          8226,
          8210,
          8237,
          8313,
          8347,
          5008,
          5008,
          5001,
        ],
        perkStyle: 8200,
        perkSubStyle: 8300,
      },
    },
    {
      teamId: 200,
      spell1Id: 4,
      spell2Id: 11,
      championId: 11,
      profileIconId: 4764,
      summonerName: 'Darkrystal33',
      bot: false,
      summonerId: '2-IF780Xcyf6t242CyyEKnm8Jxg36U-kcizGpUmWlusEPqA',
      gameCustomizationObjects: [],
      perks: {
        perkIds: [
          8008,
          9111,
          9104,
          8014,
          8135,
          8138,
          5005,
          5008,
          5002,
        ],
        perkStyle: 8000,
        perkSubStyle: 8100,
      },
    },
    {
      teamId: 200,
      spell1Id: 4,
      spell2Id: 21,
      championId: 99,
      profileIconId: 4276,
      summonerName: 'hppyWIFEhppyLIFE',
      bot: false,
      summonerId: 'skHq9Auv-eCfMQq_DEEufy-wBRAnGs_t_bHHzBkJM9s5wII',
      gameCustomizationObjects: [],
      perks: {
        perkIds: [
          8369,
          8304,
          8345,
          8347,
          8126,
          8106,
          5008,
          5008,
          5002,
        ],
        perkStyle: 8300,
        perkSubStyle: 8100,
      },
    },
    {
      teamId: 200,
      spell1Id: 4,
      spell2Id: 6,
      championId: 122,
      profileIconId: 4104,
      summonerName: '10Dini10',
      bot: false,
      summonerId: 'Gh39En9kjxmjijxQ9CeH-xM0HWgPGcCL_5IHDQ6EOBstT3U',
      gameCustomizationObjects: [],
      perks: {
        perkIds: [
          8010,
          9111,
          9105,
          8299,
          8275,
          8234,
          5005,
          5008,
          5002,
        ],
        perkStyle: 8000,
        perkSubStyle: 8200,
      },
    },
  ],
  observers: {
    encryptionKey: 'pcKg5fBPpCaMmUyVfB1A0pgXoIoIwok3',
  },
  platformId: 'EUW1',
  bannedChampions: [
    {
      championId: 555,
      teamId: 100,
      pickTurn: 1,
    },
    {
      championId: 32,
      teamId: 100,
      pickTurn: 2,
    },
    {
      championId: 105,
      teamId: 100,
      pickTurn: 3,
    },
    {
      championId: 254,
      teamId: 100,
      pickTurn: 4,
    },
    {
      championId: 114,
      teamId: 100,
      pickTurn: 5,
    },
    {
      championId: 238,
      teamId: 200,
      pickTurn: 6,
    },
    {
      championId: 555,
      teamId: 200,
      pickTurn: 7,
    },
    {
      championId: 234,
      teamId: 200,
      pickTurn: 8,
    },
    {
      championId: 35,
      teamId: 200,
      pickTurn: 9,
    },
    {
      championId: 39,
      teamId: 200,
      pickTurn: 10,
    },
  ],
  gameStartTime: 0,
  gameLength: 0,
};
