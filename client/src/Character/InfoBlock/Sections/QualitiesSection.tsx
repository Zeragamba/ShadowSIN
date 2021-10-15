import { Typography } from '@mui/material'
import { FC } from 'react'

import { QualitiesList } from '../../../Qualities/QualitiesList'
import { InfoSection } from '../../../UI/InfoBlock/InfoSection'
import { useCharacterData } from '../../CharacterProvider'

export const QualitiesSection: FC = () => {
  const character = useCharacterData()
  if (!character) return null

  return <InfoSection>
    <Typography variant={'h6'}>Qualities</Typography>
    <QualitiesList qualities={character.qualities} />
  </InfoSection>
}
