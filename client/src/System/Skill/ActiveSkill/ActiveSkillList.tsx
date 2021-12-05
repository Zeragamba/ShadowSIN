import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { FC } from 'react'

import { ActiveSkillData } from './ActiveSkillData'

interface SkillListProps {
  skills: ActiveSkillData[]
}

export const ActiveSkillList: FC<SkillListProps> = ({
  skills,
}) => {
  return (
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Rank</TableCell>
          <TableCell>Attr</TableCell>
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
  skill: ActiveSkillData
}

const SkillListRow: FC<SkillListRowProps> = ({
  skill,
}) => {
  return (
    <TableRow key={skill.name}>
      <TableCell>
        <div>{skill.name}</div>
        {skill.speciality && <div>(S. {skill.speciality})</div>}
        {skill.expertise && <div>(E. {skill.expertise})</div>}
      </TableCell>
      <TableCell>
        {skill.rank}
      </TableCell>
      <TableCell>
        {skill.attr}
        {skill.altAttr && `/${skill.altAttr}`}
      </TableCell>
    </TableRow>
  )
}