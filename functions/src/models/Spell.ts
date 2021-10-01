import spells from "../static-data/spells.json"
import { Serializable } from "./Serializable";

export class Spell implements Serializable{
  id: number;
  cooldown: number;
  image: string;
  constructor(id: number) {
    const rawSpell: RawSpell | undefined = spells.find((spell) => {
      return spell.id === id;
    })
    if (!rawSpell){
      throw new Error("Spell not found.");
    }

    this.id = rawSpell.id;
    this.cooldown = rawSpell.cooldown;
    this.image = rawSpell.iconPath;
  }

  serialize(){
    return{
      id: this.id,
      cooldown: this.cooldown,
      image: this.image
    }
  }
}

export interface RawSpell {
  id: number
  name: string
  description: string
  summonerLevel: number
  cooldown: number
  gameModes: string[]
  iconPath: string
}

