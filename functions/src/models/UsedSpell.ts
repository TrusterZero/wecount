import { Participant } from "./Participant";
import { Spell } from "./Spell";

export interface UsedSpell {
  timestamp: number;
  spell: Spell;
  participant: Participant;
  reporter: Participant;
}
