import { GearData } from '../Gear/GearData'
import { Attribute } from './Attribute'
import { Skill } from './Skill'

export interface CharacterData {
  name: string
  metaType: string
  nuyen: number

  alias?: string
  ethnicity?: string
  age?: number
  gender?: string
  height?: string
  weight?: string
  reputation?: string
  heat?: string
  karma: number
  misc?: string

  attributes: {
    [Attr in Attribute]?: number
  }

  skills: Skill[]

  gear: GearData[]
}
