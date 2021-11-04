import {GameCustomizationObject} from "./GameCustomizationObject";
import {Perks} from "./Perks";

export interface CurrentGameParticipant {
  championId: number;
  perks: Perks;
  profileIconId: number;
  bot: boolean;
  teamId: number;
  summonerName: string;
  summonerId: string;
  spell1Id: number;
  spell2Id: number;
  gameCustomizationObjects: GameCustomizationObject;
}
