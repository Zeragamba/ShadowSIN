import { Attribute } from '../Attribute'

export type SkillId = string;

export enum SkillType {
  active,
  language,
  knowledge
}

export interface BasicSkillData {
  id: SkillId
  type: SkillType
  name: string
}

export interface ActiveSkillData extends BasicSkillData {
  type:  SkillType.active
  rank: number
  attr: Attribute
  altAttr?: Attribute
  speciality: string | null
  expertise: string | null
}

export interface LanguageSkillData extends BasicSkillData {
  type: SkillType.language
  rank: 'basic' | 'speciality' | 'expertise' | 'native'
}

export interface KnowledgeSkillData extends BasicSkillData {
  type: SkillType.knowledge
}

export type SkillData = ActiveSkillData | LanguageSkillData | KnowledgeSkillData
