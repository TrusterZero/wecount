import { CurrentGameInfo } from "./CurrentGameInfo";
import { CurrentGameParticipant } from "./CurrentGameParticipant";
import { Participant } from "./Participant";
import { Serializable } from "./Serializable";
import { UsedSpell } from "./UsedSpell";

export class Match implements Serializable{
  id: number;
  participants: Participant[] = [];
  usedSpells: UsedSpell[] = [];

  constructor(gameInfo: CurrentGameInfo) {
    if (gameInfo.gameId !== undefined) {
      this.id = gameInfo.gameId
    } else {
      throw new Error("gameId missing but required")
    }

    if (gameInfo.participants !== undefined) {
      this.participants = gameInfo.participants.map((participant: CurrentGameParticipant) => {
        return new Participant(participant)
      })
    }
  }

  serialize(){
    return {
      id: this.id,
      participants: this.participants.map(participant => participant.serialize()),
      usedSpells: this.usedSpells
    }
  }
}
