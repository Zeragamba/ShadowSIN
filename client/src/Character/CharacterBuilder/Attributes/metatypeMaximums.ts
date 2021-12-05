import { CharacterAttr } from '../../CharacterAttr'
import { CharAttributes } from '../../CharacterData'
import { Metatype } from '../../Metatypes'

export const metatypeMaximums: Record<Metatype, CharAttributes> = {
  Dwarf: {
    [CharacterAttr.body]: 7,
    [CharacterAttr.agility]: 6,
    [CharacterAttr.reaction]: 5,
    [CharacterAttr.strength]: 8,
    [CharacterAttr.willpower]: 7,
    [CharacterAttr.logic]: 6,
    [CharacterAttr.intuition]: 6,
    [CharacterAttr.charisma]: 6,
    [CharacterAttr.edge]: 7,
    [CharacterAttr.magic]: 6,
    [CharacterAttr.resonance]: 6,
    [CharacterAttr.essence]: 6,
  },
  Elf: {
    [CharacterAttr.body]: 6,
    [CharacterAttr.agility]: 7,
    [CharacterAttr.reaction]: 6,
    [CharacterAttr.strength]: 6,
    [CharacterAttr.willpower]: 6,
    [CharacterAttr.logic]: 6,
    [CharacterAttr.intuition]: 6,
    [CharacterAttr.charisma]: 8,
    [CharacterAttr.edge]: 6,
    [CharacterAttr.magic]: 6,
    [CharacterAttr.resonance]: 6,
    [CharacterAttr.essence]: 6,
  },
  Human: {
    [CharacterAttr.body]: 6,
    [CharacterAttr.agility]: 6,
    [CharacterAttr.reaction]: 6,
    [CharacterAttr.strength]: 6,
    [CharacterAttr.willpower]: 6,
    [CharacterAttr.logic]: 6,
    [CharacterAttr.intuition]: 6,
    [CharacterAttr.charisma]: 6,
    [CharacterAttr.edge]: 7,
    [CharacterAttr.magic]: 6,
    [CharacterAttr.resonance]: 6,
    [CharacterAttr.essence]: 6,
  },
  Ork: {
    [CharacterAttr.body]: 8,
    [CharacterAttr.agility]: 1,
    [CharacterAttr.reaction]: 1,
    [CharacterAttr.strength]: 8,
    [CharacterAttr.willpower]: 1,
    [CharacterAttr.logic]: 1,
    [CharacterAttr.intuition]: 1,
    [CharacterAttr.charisma]: 5,
    [CharacterAttr.edge]: 1,
    [CharacterAttr.magic]: 6,
    [CharacterAttr.resonance]: 6,
    [CharacterAttr.essence]: 6,
  },
  Troll: {
    [CharacterAttr.body]: 9,
    [CharacterAttr.agility]: 5,
    [CharacterAttr.reaction]: 1,
    [CharacterAttr.strength]: 9,
    [CharacterAttr.willpower]: 1,
    [CharacterAttr.logic]: 1,
    [CharacterAttr.intuition]: 1,
    [CharacterAttr.charisma]: 5,
    [CharacterAttr.edge]: 1,
    [CharacterAttr.magic]: 6,
    [CharacterAttr.resonance]: 6,
    [CharacterAttr.essence]: 6,
  },
}