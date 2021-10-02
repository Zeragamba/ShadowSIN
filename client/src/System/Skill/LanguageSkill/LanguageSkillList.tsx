import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { FC } from 'react'

import { LanguageSkillData } from './LanguageSkillData'

interface SkillListProps {
  skills: LanguageSkillData[]
}

export const LanguageSkillList: FC<SkillListProps> = ({
  skills,
}) => {
  return (
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Rank</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {skills.map(skill => (
          <SkillListRow key={skill.name} skill={skill} />
        ))}
      </TableBody>
    </Table>
  )
}

interface SkillListRowProps {
  skill: LanguageSkillData
}

const SkillListRow: FC<SkillListRowProps> = ({
  skill,
}) => {
  return (
    <TableRow key={skill.name}>
      <TableCell>{skill.name}</TableCell>
      <TableCell>{skill.rank}</TableCell>
    </TableRow>
  )
}
