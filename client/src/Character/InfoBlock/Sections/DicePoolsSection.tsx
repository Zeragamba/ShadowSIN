import { Typography } from '@material-ui/core'
import { FC } from 'react'

import { useAllGear } from '../../../Gear/GearContext'
import { KitType } from '../../../Gear/Kit/KitType'
import { OtherGearAttr, OtherGearData } from '../../../Gear/OtherGearData'
import { DamageType } from '../../../System/Damage/DamageType'
import { ActiveSkillId } from '../../../System/Skill/ActiveSkill/ActiveSkillId'
import { DiceGroup, DicePool, DicePools, skillSpecialtyBonus } from '../../../UI/DicePool'
import { InfoSection } from '../../../UI/InfoBlock/InfoSection'
import { CharacterAttr } from '../../CharacterAttr'
import { CharacterPoolTypes } from '../../CharacterPoolTypes'
import { useActiveSkill } from '../../CharacterProvider'

export const DicePoolsSection: FC = () => {
  return <InfoSection>
    <Typography variant={'h6'}>Dice Pools</Typography>
    <DicePools>
      <DodgePool />
      <ResistDamagePool />
      <ComposurePool />
      <JudgeIntentPool />
      <MemoryPool />
      <LiftPool />
      <FirstAidPool />
      <MedkitPool />
    </DicePools>
  </InfoSection>
}

const DodgePool: FC = () => <DicePool
  key={CharacterPoolTypes.dodge}
  name={'Dodge'}
  attrs={[CharacterAttr.reaction, CharacterAttr.intuition]}
  dmgPenaltyTypes={[DamageType.charPhysical, DamageType.charStun]}
/>

const ResistDamagePool: FC = () => <DicePool
  key={CharacterPoolTypes.dmgResist}
  name={'Resist Dmg.'}
  attrs={[CharacterAttr.body]}
  dmgPenaltyTypes={[]}
/>

const ComposurePool: FC = () => <DicePool
  key={CharacterPoolTypes.composure}
  name={'Composure'}
  attrs={[CharacterAttr.willpower, CharacterAttr.charisma]}
  dmgPenaltyTypes={[DamageType.charPhysical, DamageType.charStun]}
/>

const JudgeIntentPool: FC = () => <DicePool
  key={CharacterPoolTypes.judgeIntent}
  name={'Judge Intent'}
  attrs={[CharacterAttr.willpower, CharacterAttr.intuition]}
  dmgPenaltyTypes={[DamageType.charPhysical, DamageType.charStun]}
/>

const MemoryPool: FC = () => <DicePool
  key={CharacterPoolTypes.memory}
  name={'Memory'}
  attrs={[CharacterAttr.logic, CharacterAttr.intuition]}
  dmgPenaltyTypes={[DamageType.charPhysical, DamageType.charStun]}
/>

const LiftPool: FC = () => <DicePool
  key={CharacterPoolTypes.liftCarry}
  name={'Lift/Carry'}
  attrs={[CharacterAttr.body, CharacterAttr.strength]}
  dmgPenaltyTypes={[DamageType.charPhysical, DamageType.charStun]}
/>

const FirstAidPool: FC = () => {
  const firstAidKit = useAllGear()
    .find(gear => gear.kit === KitType.firstAid)
  const biotechSkill = useActiveSkill(ActiveSkillId.biotech)
  if (!biotechSkill) return null

  const bonuses: DiceGroup[] = []
  const specialtyBonus = skillSpecialtyBonus(biotechSkill, 'First Aid')
  if (specialtyBonus) bonuses.push(specialtyBonus)
  if (!firstAidKit) bonuses.push({ name: 'Kit', size: -2 })

  return (
    <DicePool
      key={CharacterPoolTypes.firstAid}
      name={'First Aid'}
      skills={[ActiveSkillId.biotech]}
      attrs={[CharacterAttr.logic]}
      bonuses={bonuses}
      dmgPenaltyTypes={[DamageType.charPhysical, DamageType.charStun]}
    />
  )
}

const MedkitPool: FC = () => {
  const biotechSkill = useActiveSkill(ActiveSkillId.biotech)
  const medKit = useAllGear().find(gear => gear.kit === KitType.medKit) as OtherGearData | undefined

  if (!biotechSkill) return null
  if (!medKit) return null

  const bonuses: DiceGroup[] = []
  if (medKit.attributes && medKit.attributes[OtherGearAttr.medkitRating])
    bonuses.push({ name: 'Medkit', size: medKit.attributes[OtherGearAttr.medkitRating] as number || 0 })

  return (
    <DicePool
      key={CharacterPoolTypes.firstAid}
      name={'MedKit'}
      skills={[ActiveSkillId.biotech]}
      attrs={[CharacterAttr.logic]}
      bonuses={bonuses}
      dmgPenaltyTypes={[DamageType.charPhysical, DamageType.charStun]}
    />
  )
}