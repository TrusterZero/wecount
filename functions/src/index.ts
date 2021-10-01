import * as functions from "firebase-functions";
import admin from "firebase-admin";
// @ts-ignore
import firebase from "firebase"
// import axios from "axios";
import {CurrentGameInfo} from "./models/CurrentGameInfo";
import {Match} from "./models/Match";
// import {SummonerInfo} from "./models/SummonerInfo";
// import {SummonerDTO} from "./models/SummonerDTO";
import {firestore} from 'firebase-admin/lib/firestore';
import DocumentReference = firestore.DocumentReference;
import DocumentData = firebase.firestore.DocumentData;


admin.initializeApp()
// Firebase SDK
const db = admin.firestore();

export const getMatch = functions.https.onRequest(async (request, response) => {


  // // Summoner info
  // const info: SummonerInfo = request.body as SummonerInfo;
  //
  // // Request summoner Id first using the summoner's name
  // const summonerUrl = `https://${info.region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${info.name}?api_key=RGAPI-5eb77cab-2854-445b-aa6a-f4f235ca21ca`; // hier wordt een variabele gemaakt met een url waarin de vorige variabele summonerInfo gebruikt wordt met de property name
  // const summonerDTO: SummonerDTO = (await axios.get(summonerUrl)).data; // met axios kan er hier een https opgevraagd en de inhoud gebruikt worden
  //
  // // Use the Id to request the match
  // const matchUrl = `https://${info.region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/${summonerDTO.id}?api_key=RGAPI-5eb77cab-2854-445b-aa6a-f4f235ca21ca`;
  // const gameInfo: CurrentGameInfo = (await axios.get(matchUrl)).data;

  // @ts-ignore
  const gameInfo: CurrentGameInfo = MATCH_DATA as CurrentGameInfo;

  const runningMatch: Match = new Match(gameInfo) // De match die wij van riot binnen krijgen


  // const existingMatchRef: DocumentReference<DocumentData> = (await db.collection('matches').doc(`${runningMatch.id}`));
  // const existingMatchSnapshot = existingMatchRef.get()
  // const existingMatch: Match = (await existingMatchSnapshot).data(); // De match die wij zelf op hebben geslagen (met de al gebruikte spells (usedSpells))

  const existingMatch: Match = await getDocument('matches', runningMatch.id) // de eerdere 3 stappen worden uitgevoerd in deze functie

  // Als we geen existing match hebben
  if (!existingMatch) {
    // Plaats dan de runningMatch die we van Riot hebben gekregen in de data base
    await db.collection('matches').doc(`${runningMatch.id}`).set(runningMatch.serialize()).then(async () => {
      // Stuur de runningMatch naar de gebruiker (mobiele app)
      response.send(runningMatch.serialize());
    });
  } // Als de existingMatch wel bestaat
  else {
    // Stuur dan de existingMatch naar de gebruiker
    response.send(existingMatch)
  }
// bitchhhh
  // dev diff
});

async function getDocument(collection: string, id: string | number) {
  const refeference: DocumentReference<DocumentData> = (await db.collection(collection).doc(`${id}`));
  const snapshot = refeference.get()
  return (await snapshot).data()
}

const MATCH_DATA = {
  "gameId": 5475504430,
  "mapId": 11,
  "gameMode": "CLASSIC",
  "gameType": "MATCHED_GAME",
  "gameQueueConfigId": 400,
  "participants": [
    {
      "teamId": 100,
      "spell1Id": 12,
      "spell2Id": 14,
      "championId": 164,
      "profileIconId": 4760,
      "summonerName": "Michael J Coast",
      "bot": false,
      "summonerId": "QQYC6pxssVPQdanh0XUDOMlkHwhNOUD11u8eRPysA3WHW4WD",
      "gameCustomizationObjects": [],
      "perks": {
        "perkIds": [
          8010,
          9111,
          9103,
          8299,
          8429,
          8451,
          5005,
          5008,
          5002
        ],
        "perkStyle": 8000,
        "perkSubStyle": 8400
      }
    },
    {
      "teamId": 100,
      "spell1Id": 4,
      "spell2Id": 11,
      "championId": 141,
      "profileIconId": 3466,
      "summonerName": "gajolusitano",
      "bot": false,
      "summonerId": "yG4VFcStTnMd2omJuViK-HbynAv4pokZ1uNQDVz7wv2YsRzYxI9z77d9TQ",
      "gameCustomizationObjects": [],
      "perks": {
        "perkIds": [
          8128,
          8139,
          8138,
          8135,
          8210,
          8236,
          5008,
          5008,
          5002
        ],
        "perkStyle": 8100,
        "perkSubStyle": 8200
      }
    },
    {
      "teamId": 100,
      "spell1Id": 14,
      "spell2Id": 4,
      "championId": 126,
      "profileIconId": 5028,
      "summonerName": "2aContaDoMoreira",
      "bot": false,
      "summonerId": "Ear3PLUIrWD4Cfv0EW2kxMoiDazDxqCYVZ3pivez6OIM2dBl",
      "gameCustomizationObjects": [],
      "perks": {
        "perkIds": [
          8010,
          8009,
          9105,
          8299,
          8304,
          8345,
          5008,
          5008,
          5003
        ],
        "perkStyle": 8000,
        "perkSubStyle": 8300
      }
    },
    {
      "teamId": 100,
      "spell1Id": 14,
      "spell2Id": 4,
      "championId": 497,
      "profileIconId": 5031,
      "summonerName": "Yandrak90",
      "bot": false,
      "summonerId": "Ip7WbnRhlSeOn8gDZH9eQG6pEspV1aoJ_KL70YJxATWkYo0",
      "gameCustomizationObjects": [],
      "perks": {
        "perkIds": [
          8465,
          8446,
          8473,
          8451,
          8136,
          8105,
          5005,
          5003,
          5002
        ],
        "perkStyle": 8400,
        "perkSubStyle": 8100
      }
    },
    {
      "teamId": 100,
      "spell1Id": 4,
      "spell2Id": 7,
      "championId": 22,
      "profileIconId": 589,
      "summonerName": "sskuba",
      "bot": false,
      "summonerId": "tan2osCiyh4ssHLlA8iVfSmxHPEMGcjpQTfz42i9VCDzJFg",
      "gameCustomizationObjects": [],
      "perks": {
        "perkIds": [
          9923,
          8126,
          8138,
          8135,
          8345,
          8410,
          5005,
          5008,
          5002
        ],
        "perkStyle": 8100,
        "perkSubStyle": 8300
      }
    },
    {
      "teamId": 200,
      "spell1Id": 6,
      "spell2Id": 14,
      "championId": 711,
      "profileIconId": 5076,
      "summonerName": "Qe3TheQe3",
      "bot": false,
      "summonerId": "jYCQ5MJMlLEQf4dpEoBF62pSQs3R-h1wh4Bouj5O5U6ygvqI",
      "gameCustomizationObjects": [],
      "perks": {
        "perkIds": [
          8010,
          9111,
          9105,
          8299,
          8275,
          8234,
          5005,
          5008,
          5002
        ],
        "perkStyle": 8000,
        "perkSubStyle": 8200
      }
    },
    {
      "teamId": 200,
      "spell1Id": 4,
      "spell2Id": 14,
      "championId": 25,
      "profileIconId": 5031,
      "summonerName": "The Bad WoIf",
      "bot": false,
      "summonerId": "VYkSYhrdOr95i7VizZZLNk8STw6jtCW8rwLo3eq7KnOdvgXNpRvK-ae-PA",
      "gameCustomizationObjects": [],
      "perks": {
        "perkIds": [
          8128,
          8126,
          8138,
          8106,
          8236,
          8226,
          5008,
          5008,
          5002
        ],
        "perkStyle": 8100,
        "perkSubStyle": 8200
      }
    },
    {
      "teamId": 200,
      "spell1Id": 4,
      "spell2Id": 14,
      "championId": 120,
      "profileIconId": 3457,
      "summonerName": "TheS1lentGuy",
      "bot": false,
      "summonerId": "SRU3Y8UWrKdQCjWBcdc7fDG3JiudwAkbjkga14WVo7zH6Wi1Y2YGC9JHEw",
      "gameCustomizationObjects": [],
      "perks": {
        "perkIds": [
          8128,
          8139,
          8138,
          8135,
          8345,
          8352,
          5005,
          5008,
          5002
        ],
        "perkStyle": 8100,
        "perkSubStyle": 8300
      }
    },
    {
      "teamId": 200,
      "spell1Id": 7,
      "spell2Id": 4,
      "championId": 110,
      "profileIconId": 4075,
      "summonerName": "T W H 01",
      "bot": false,
      "summonerId": "ahlnQmWIuuB7N6WNqMQwOWEAu0s3dhwrfbncj_UgG_p8HGqPou6uXsRgZw",
      "gameCustomizationObjects": [],
      "perks": {
        "perkIds": [
          8128,
          8126,
          8138,
          8106,
          8009,
          8014,
          5008,
          5008,
          5002
        ],
        "perkStyle": 8100,
        "perkSubStyle": 8000
      }
    },
    {
      "teamId": 200,
      "spell1Id": 11,
      "spell2Id": 4,
      "championId": 246,
      "profileIconId": 3378,
      "summonerName": "SuperSaiyanBlue",
      "bot": false,
      "summonerId": "2oCsISbNlPSkHGuBD-R_f3zeRuvYeQ02qaZ-RyULwmwUyJTD",
      "gameCustomizationObjects": [],
      "perks": {
        "perkIds": [
          8128,
          8143,
          8138,
          8135,
          8304,
          8347,
          5008,
          5008,
          5002
        ],
        "perkStyle": 8100,
        "perkSubStyle": 8300
      }
    }
  ],
  "observers": {
    "encryptionKey": "pWfojdgc8ma1JIxqcdowXGF58s8qbH9z"
  },
  "platformId": "EUW1",
  "bannedChampions": [
    {
      "championId": 777,
      "teamId": 100,
      "pickTurn": 1
    },
    {
      "championId": 555,
      "teamId": 100,
      "pickTurn": 2
    },
    {
      "championId": 11,
      "teamId": 100,
      "pickTurn": 3
    },
    {
      "championId": 106,
      "teamId": 100,
      "pickTurn": 4
    },
    {
      "championId": 360,
      "teamId": 100,
      "pickTurn": 5
    },
    {
      "championId": 111,
      "teamId": 200,
      "pickTurn": 6
    },
    {
      "championId": 63,
      "teamId": 200,
      "pickTurn": 7
    },
    {
      "championId": 238,
      "teamId": 200,
      "pickTurn": 8
    },
    {
      "championId": -1,
      "teamId": 200,
      "pickTurn": 9
    },
    {
      "championId": 54,
      "teamId": 200,
      "pickTurn": 10
    }
  ],
  "gameStartTime": 0,
  "gameLength": 0
}
