import { BannedChampion } from "./BannedChampion";
import { Observer } from "./Observer";
import { CurrentGameParticipant} from "./CurrentGameParticipant";

export interface CurrentGameInfo {
  gameId: number;
  gameType: string;
  gameStartTime: number;
  mapId: number;
  gameLength: number;
  platformId: string;
  gameMode: string;
  bannedChampions: BannedChampion[];
  gameQueueConfigId: number;
  observers: Observer;
  participants: CurrentGameParticipant[];
}
