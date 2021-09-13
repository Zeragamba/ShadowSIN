import { registerAttrNames } from '../System/Attribute'

export enum CharacterAttr {
  body = 'char.body',
  agility = 'char.agility',
  reaction = 'char.reaction',
  strength = 'char.strength',
  willpower = 'char.willpower',
  logic = 'char.logic',
  intuition = 'char.intuition',
  charisma = 'char.charisma',
  edge = 'char.edge',
  essence = 'char.essence',
  magic = 'char.magic',
  resonance = 'char.resonance',
}

registerAttrNames({
  [CharacterAttr.body]: 'Body',
  [CharacterAttr.agility]: 'Agility',
  [CharacterAttr.reaction]: 'Reaction',
  [CharacterAttr.strength]: 'Strength',
  [CharacterAttr.willpower]: 'Willpower',
  [CharacterAttr.logic]: 'Logic',
  [CharacterAttr.intuition]: 'Intuition',
  [CharacterAttr.charisma]: 'Charisma',
  [CharacterAttr.edge]: 'Edge',
  [CharacterAttr.essence]: 'Essence',
  [CharacterAttr.magic]: 'Magic',
  [CharacterAttr.resonance]: 'Resonance',
})
