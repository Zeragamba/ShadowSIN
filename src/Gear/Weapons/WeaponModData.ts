import { GearData, GearType } from '../GearData'

export enum WeaponModAttr {

}

export interface WeaponModData extends GearData {
  gearType: GearType.weaponMod
  slot: WeaponModSlot | null
  removable?: boolean
}

export enum WeaponModSlot {
  top = 'Top',
  barrel = 'Barrel',
  under = 'Under',
  topOrUnder = 'Top or Under'
}
