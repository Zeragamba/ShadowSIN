import { Chip, Paper, Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { FC } from 'react'

import { useAttachedGear, useGearOfType } from '../GearContext'
import { GearType } from '../GearData'
import { GearAttributes } from '../GearInfo/GearAttributes'
import { GearHeader } from '../GearInfo/GearHeader'
import { AutosoftData } from '../Software/Autosoft/AutosoftData'
import { AutosoftsList } from '../Software/Autosoft/AutosoftsList'
import { VehicleData } from '../Vehicles/VehicleData'
import { RccAttr, RccData } from './RccData'

interface RccInfoProps {
  rcc: RccData
}

export const RccInfo: FC<RccInfoProps> = ({
  rcc,
}) => {
  const dataProcessing = rcc.attributes[RccAttr.dataProcessing]
  const autosofts = useAttachedGear<AutosoftData>(rcc.id, {
    type: GearType.autosoft,
  })

  const slavedVehicles: VehicleData[] = [
    ...useGearOfType<VehicleData>(GearType.drone),
    ...useGearOfType<VehicleData>(GearType.vehicle),
  ].filter(vehicle => vehicle.slavedTo === rcc.id)
  const maxSlaved = rcc.attributes[RccAttr.deviceRating] * 3

  return (
    <Paper elevation={1}>
      <GearHeader item={rcc} />
      <GearAttributes item={rcc} />

      <Box sx={{ padding: 1 }}>
        <Typography variant={'h6'}>Autosofts ({rcc.slavedAutosofts.length}/{dataProcessing} shared)</Typography>
        <AutosoftsList autosofts={autosofts} slavedIds={rcc.slavedAutosofts} withCost withAvail />
      </Box>

      <Box sx={{ padding: 1 }}>
        <Typography variant={'h6'}>Slaved ({slavedVehicles.length} / {maxSlaved})</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {slavedVehicles.map(gear => (
            <Chip key={gear.id} label={gear.name} />
          ))}
        </Box>
      </Box>
    </Paper>
  )
}
