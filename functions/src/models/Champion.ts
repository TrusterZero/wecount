import champions from "../static-data/champions.json";
import {Serializable} from "./Serializable";


export class Champion implements Serializable {
  key: string;
  name: string;
  image: string;

  constructor(key: string) {
    const rawChampion: RawChampion | undefined = Object.values(champions).find((champion) => {
      return champion.key === key;
    });
    if (!rawChampion) {
      throw new Error("Champion not found.");
    }

    this.key = rawChampion.key;
    this.name = rawChampion.name;
    this.image = rawChampion.image.sprite;
  }

  serialize(): Record<string, unknown> {
    return {
      key: this.key,
      name: this.name,
      image: this.image,
    };
  }
}

export interface RawChampion {
  version: string
  id: string
  key: string
  name: string
  title: string
  blurb: string
  info: {
    attack: number
    defense: number
    magic: number
    difficulty: number
  }
  image: {
    full: string
    sprite: string
    group: string
    x: number
    y: number
    w: number
    h: number
  }
  tags: string[]
  partype: string
  stats: {
    hp: number
    hpperlevel: number
    mp: number
    mpperlevel: number
    movespeed: number
    armor: number
    armorperlevel: number
    spellblock: number
    spellblockperlevel: number
    attackrange: number
    hpregen: number
    hpregenperlevel: number
    mpregen: number
    mpregenperlevel: number
    crit: number
    critperlevel: number
    attackdamage: number
    attackdamageperlevel: number
    attackspeedperlevel: number
    attackspeed: number
  }
}
