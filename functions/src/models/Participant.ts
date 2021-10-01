import { Champion } from "./Champion";
import { CurrentGameParticipant } from "./CurrentGameParticipant";
import { Serializable } from "./Serializable";
import { Spell } from "./Spell";

export class Participant implements Serializable{
  id: string;
  name: string;
  champion: Champion | undefined;
  spells: Spell[] = [];
  teamId: number;

  constructor(gameParticipant: CurrentGameParticipant) {
    if (gameParticipant.summonerId !== undefined) {
      this.id = gameParticipant.summonerId
    } else {
      throw new Error("summonerId missing but required")
    }

    if (gameParticipant.summonerName){
      this.name = gameParticipant.summonerName
    } else {
      throw new Error("summonerName missing but required")
    }

    if (gameParticipant.championId) {
      console.log("championId", gameParticipant.championId)
      this.champion = new Champion(gameParticipant.championId.toString())
    }

    if (gameParticipant.spell1Id !== undefined) {
      this.spells.push(new Spell(gameParticipant.spell1Id))
    }

    if (gameParticipant.spell2Id !== undefined) {
      this.spells.push(new Spell(gameParticipant.spell2Id))
    }

    if (gameParticipant.teamId !== undefined){
      this.teamId = gameParticipant.teamId
    } else {
      throw new Error("teamId missing but required")
    }
  }

  serialize(){
    return{
      id: this.id,
      name: this.name,
      champion: this.champion?.serialize(),
      spells: this.spells.map(spell => spell.serialize()),
      teamId: this.teamId
    }
  }
}
