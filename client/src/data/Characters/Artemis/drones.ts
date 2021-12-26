import { CharacterData } from '../../../Character/CharacterData'
import { GearType } from '../../../Gear/GearData'
import { AutosoftAttr } from '../../../Gear/Software/Autosoft/AutosoftAttr'
import { AutosoftData } from '../../../Gear/Software/Autosoft/AutosoftData'
import { VehicleAttr } from '../../../Gear/Vehicles/VehicleAttr'
import { VehicleData } from '../../../Gear/Vehicles/VehicleData'
import { ModType, SlotType, VehicleModAttr, VehicleModData } from '../../../Gear/Vehicles/VehicleModData'
import { WeaponAttr } from '../../../Gear/Weapons/WeaponAttr'
import { WeaponData } from '../../../Gear/Weapons/WeaponData'
import { ActiveSkillIds, Specializations } from '../../../Skills'
import { EffectType } from '../../../System/Effect'
import { addGear } from '../index'

import { Artemis, rcc } from './index'

const fnHar: WeaponData = {
  id: null,
  gearType: GearType.weapon,
  name: 'FN-HAR',
  type: 'Rifle',
  avail: {rarity: 3, license: true},
  cost: 2_100,
  attributes: {
    [WeaponAttr.dv]: '5P',
    [WeaponAttr.modes]: 'SA/BF/FA',
    [WeaponAttr.attackRatings]: '3/11/10/6/1',
    [WeaponAttr.ammo]: '35(c)',
  },

  skill: ActiveSkillIds.CRB.firearms,
  specialtyName: Specializations.CRB.Firearms.Rifles,
}

const riggerInterface: VehicleModData = {
  id: null,
  gearType: GearType.vehicleMod,
  modType: ModType.riggerInterface,
  name: 'Rigger Interface',
  type: 'vehicle mod',
  avail: {rarity: 2, license: true},
  cost: 1_000,
}

const stdWeaponMount: VehicleModData = {
  id: null,
  gearType: GearType.vehicleMod,
  modType: ModType.stdWeaponMount,
  name: 'Standard Weapon Mount',
  type: 'vehicle mod',
  avail: {rarity: 4, illegal: true},
  cost: 2_500,
}

export function addDrones(character: CharacterData): void {
  addGear<VehicleData>(character, {
    id: '4a5eb8d5-004b-4cdd-bce5-e0db64a33639',
    gearType: GearType.vehicle,
    name: 'Range Rover Model 2080',
    type: 'Van',
    cost: 73_000,
    avail: {rarity: 2},

    attributes: {
      [VehicleAttr.handling]: '4/5',
      [VehicleAttr.accel]: 12,
      [VehicleAttr.speedInterval]: 20,
      [VehicleAttr.topSpeed]: 160,
      [VehicleAttr.body]: 16,
      [VehicleAttr.armor]: 10,
      [VehicleAttr.pilot]: 4,
      [VehicleAttr.sensor]: 4,
      [VehicleAttr.seat]: 4,
    },

    slavedTo: rcc.id,
    pilotingSpeciality: 'Ground Craft',
  }, [
    addGear(character, {...riggerInterface, id: 'cebc1ac9-e097-44f6-9394-bc342a7f71a3'}),
    addGear(character, {
      id: '1497c961-81f4-4b75-aed6-90c345671188',
      name: 'Medium Drone Rack',
      gearType: GearType.vehicleMod,
      type: 'Core Mod',
      attributes: {
        [VehicleModAttr.hardpointSize]: 'Large',
        'Drone Capacity': '8 Medium',
      },
    }),
  ])

  addGear<VehicleData>(character, {
    id: '120f2464-312a-4a2f-a53a-22aa9effa85c',
    name: 'Ross',
    gearType: GearType.vehicle,
    type: 'Medium Crawler Drone',
    cost: 65_000,

    attributes: {
      [VehicleAttr.handling]: 3,
      [VehicleAttr.accel]: 8,
      [VehicleAttr.speedInterval]: 15,
      [VehicleAttr.topSpeed]: 30,
      [VehicleAttr.body]: 8,
      [VehicleAttr.armor]: 6,
      [VehicleAttr.pilot]: 4,
      [VehicleAttr.sensor]: 4,
      [VehicleAttr.seat]: 0,
    },

    slavedTo: rcc.id,
    pilotingSpeciality: 'Ground Craft',
  }, [
    addGear(character, {
      id: '40e6106a-0f52-4f85-80e5-593b04dbcc76',
      gearType: GearType.vehicleMod,
      modType: ModType.stdWeaponMount,
      name: 'Heavy Weapon Mount',
      type: 'vehicle mod',
      avail: {rarity: 4, illegal: true},
      cost: 5_000,
    }, [
      addGear(character, {
        id: '199d265e-d203-4df4-b3ef-6225f8c4b8da',
        gearType: GearType.weapon,
        name: 'Panther XXL',
        type: 'Machine Gun',
        avail: {rarity: 6, illegal: true},
        cost: 2_100,
        attributes: {
          [WeaponAttr.dv]: '7P',
          [WeaponAttr.modes]: 'SA',
          [WeaponAttr.attackRatings]: '1/9/12/8/6',
          [WeaponAttr.ammo]: '15(c)',
        },

        skill: ActiveSkillIds.CRB.firearms,
        specialtyName: Specializations.CRB.Firearms.MachineGuns,
      }),
    ]),
    addGear(character, {
      id: '1efa148b-c110-4688-ab96-bc3f59d46405',
      gearType: GearType.vehicleMod,
      name: 'Increased Structural Integrity',
      type: 'Core Mod',
      attributes: {
        [VehicleModAttr.rating]: 4,
        [VehicleModAttr.slotType]: SlotType.chassis,
        [VehicleModAttr.slotCost]: 4,
      },

      effects: [
        { type: EffectType.attrBonus, attr: VehicleAttr.body, value: 4 },
      ],
    }),
    addGear(character, {...riggerInterface, id: '3e5e33d7-6e17-4334-8c38-4068106230a5'}),
    addGear<AutosoftData>(Artemis, {
      id: 'f78ae905-b77f-44a9-be57-56caa2e3629b',
      gearType: GearType.autosoft,
      name: 'Panther XXL Targeting',
      type: 'Targeting Autosoft',
      avail: { rarity: 9 },
      cost: 4_500,

      attributes: {
        [AutosoftAttr.rating]: 9,
        [AutosoftAttr.weapon]: 'Panther XXL',
        [AutosoftAttr.attr]: 'Sensor',
      },
    }),
  ])

  const rotoDrone: VehicleData = {
    id: '55887cc1-89b1-4b6d-8fc5-88560d32d31d',
    gearType: GearType.vehicle,
    type: 'Medium Rotor Drone',
    name: 'MCT-Nissan Roto-drone',
    cost: 5_000,
    avail: {rarity: 2},

    attributes: {
      [VehicleAttr.handling]: 3,
      [VehicleAttr.accel]: 20,
      [VehicleAttr.speedInterval]: 30,
      [VehicleAttr.topSpeed]: 160,
      [VehicleAttr.body]: 5,
      [VehicleAttr.armor]: 6,
      [VehicleAttr.pilot]: 3,
      [VehicleAttr.sensor]: 2,
      [VehicleAttr.seat]: null,
    },

    slavedTo: rcc.id,
    pilotingSpeciality: 'Aircraft',
  }

  addGear<VehicleData>(character, {
    ...rotoDrone,
    id: '55887cc1-89b1-4b6d-8fc5-88560d32d31d',
    name: 'MCT-Nissan Roto-drone 1',
  }, [
    addGear(character, {...stdWeaponMount, id: 'f2b1186d-6832-4532-95e9-c627037fcf9d'}, [
      addGear(character, {...fnHar, id: '853a03bb-18fd-42c3-9247-df59e1438904'}),
    ]),
    addGear(character, {...riggerInterface, id: 'ae26eaa6-0e99-41db-b548-383e989865a3'}),
  ])

  addGear<VehicleData>(character, {
    ...rotoDrone,
    id: '17fe3632-c927-4def-91eb-7376ea1cdd3f',
    name: 'MCT-Nissan Roto-drone 2',
  }, [
    addGear(character, {...stdWeaponMount, id: '7a1c1485-0f2f-4434-b216-3379c0b47e83'}, [
      addGear(character, {...fnHar, id: 'c068d8c7-de94-41d6-91c1-45c55fa58a93'}),
    ]),
    addGear(character, {...riggerInterface, id: '0dfe8000-84db-430b-8cd6-7684b18ac5da'}),
  ])

  addGear<VehicleData>(character, {
    ...rotoDrone,
    id: '2be9530b-621f-4f50-9188-722d3843f1c4',
    name: 'MCT-Nissan Roto-drone 3',
  }, [
    addGear(character, {...stdWeaponMount, id: '39eb01e7-f91d-4a16-9332-02818904fbd6'}, [
      addGear(character, {...fnHar, id: '842b9dbc-61da-4ec5-a71c-707121f12d00'}),
    ]),
    addGear(character, {...riggerInterface, id: '00038dff-c385-46f9-a9d0-9f83464ea691'}),
  ])

  const crawlerDrone: VehicleData = {
    id: null,
    gearType: GearType.vehicle,
    name: 'Aztech Crawler',
    type: 'Small Anthro Drone',
    cost: 4_500,
    avail: {rarity: 2},

    attributes: {
      [VehicleAttr.handling]: '3/4',
      [VehicleAttr.accel]: 8,
      [VehicleAttr.speedInterval]: 10,
      [VehicleAttr.topSpeed]: 30,
      [VehicleAttr.body]: 6,
      [VehicleAttr.armor]: 2,
      [VehicleAttr.pilot]: 2,
      [VehicleAttr.sensor]: 2,
      [VehicleAttr.seat]: null,
    },

    slavedTo: rcc.id,
    pilotingSpeciality: 'Ground Craft',
  }

  addGear<VehicleData>(character, {
    ...crawlerDrone,
    id: 'b02313b9-c024-4c5b-a661-9e23fbc6e816',
    name: 'Aztech Crawler 1',
  }, [
    addGear(character, {...stdWeaponMount, id: '91afef0a-9401-46eb-9c3a-66ac3a55a2fb'}, [
      addGear(character, {...fnHar, id: 'd70a4b40-c220-497b-b6ef-460e48477071'}),
    ]),
    addGear(character, {...riggerInterface, id: '2801f808-849f-4226-bbb6-6db12fe6ddb9'}),
  ])

  addGear<VehicleData>(character, {
    ...crawlerDrone,
    id: '2853c62d-ac20-4bb3-beed-de9d6861aeb6',
    name: 'Aztech Crawler 2',
  }, [
    addGear(character, {...stdWeaponMount, id: 'ac52b133-3fdd-489d-af2f-88a69e9eeb71'}, [
      addGear(character, {...fnHar, id: 'a4deeead-3438-4d6d-89b1-5c1ff0b2dc38'}),
    ]),
    addGear(character, {...riggerInterface, id: '48cc7529-edce-430a-a966-0d739eada633'}),
  ])

  addGear<VehicleData>(character, {
    ...crawlerDrone,
    id: 'aa6ed552-e891-4c50-b603-b54ccbbaaa16',
    name: 'Aztech Crawler 3',
  }, [
    addGear(character, {...stdWeaponMount, id: 'cc99eb85-de3c-4b24-b23e-2fcc2a4c7434'}, [
      addGear(character, {...fnHar, id: 'c769571d-b78f-407f-925d-c1b4f39f2204'}),
    ]),
    addGear(character, {...riggerInterface, id: 'd6005cd3-36ce-4507-9bd2-c1101df73ad8'}),
  ])

  addGear<VehicleData>(character, {
    ...crawlerDrone,
    id: '1293ade1-6849-47ba-a1fe-e1e5b9fdced0',
    name: 'Aztech Crawler 4',
  }, [
    addGear(character, {...stdWeaponMount, id: '6f0b22cd-2cb7-404b-9b18-3ea8a7ae2199'}, [
      addGear(character, {...fnHar, id: 'e9730f68-5a22-4aa0-8677-496a2178a6f0'}),
    ]),
    addGear(character, {...riggerInterface, id: 'cf4c20d4-fcef-4ee1-aa16-03404f502199'}),
  ])

  addGear<VehicleData>(character, {
    ...crawlerDrone,
    id: '5be40ba8-8f72-4f0b-903f-b4950f3712e3',
    name: 'Aztech Crawler 5',
  }, [
    addGear(character, {...stdWeaponMount, id: '5fb480c0-7d6c-4f40-9f19-de2bb6768798'}, [
      addGear(character, {...fnHar, id: 'a96ecc3a-edff-45ff-9378-14df89dffe6a'}),
    ]),
    addGear(character, {...riggerInterface, id: '6a671163-3b7a-4715-8533-9c989e872fd0'}),
  ])

  addGear<VehicleData>(character, {
    ...crawlerDrone,
    id: '3d68b147-bc40-4418-a647-45e39ab08676',
    name: 'Aztech Crawler 6',
  }, [
    addGear(character, {...stdWeaponMount, id: '0950cc03-fda4-4879-8049-b112d1e3d04a'}, [
      addGear(character, {...fnHar, id: '66b31a9d-47de-4241-b114-5dc6aea00de2'}),
    ]),
    addGear(character, {...riggerInterface, id: 'aab1e2fe-f0a2-4a68-887b-0ea2b671ca10'}),
  ])

  addGear<VehicleData>(character, {
    id: '9159eaaa-f444-4f54-ac01-db6b65464764',
    gearType: GearType.vehicle,
    type: 'Small Rotor Drone',
    name: 'Cyberspace Designs Quadrotor',
    cost: 5_000,
    avail: {rarity: 2},

    attributes: {
      [VehicleAttr.handling]: 2,
      [VehicleAttr.accel]: 15,
      [VehicleAttr.speedInterval]: 20,
      [VehicleAttr.topSpeed]: 120,
      [VehicleAttr.body]: 3,
      [VehicleAttr.armor]: 1,
      [VehicleAttr.pilot]: 3,
      [VehicleAttr.sensor]: 2,
      [VehicleAttr.seat]: null,
    },

    slavedTo: rcc.id,
    pilotingSpeciality: 'Aircraft',
  }, [
    addGear(character, {...riggerInterface, id: 'f1118f16-1105-428f-ba17-67d90e00377a'}),
  ])

  addGear<VehicleData>(character, {
    id: 'fbbbd8b6-7e5a-46c4-ad0c-5b8c7cadb1f3',
    gearType: GearType.vehicle,
    type: 'Micro Rotor Drone',
    name: 'MCT Gnat',
    cost: 800,
    quantity: 8,
    avail: {rarity: 2},

    attributes: {
      [VehicleAttr.handling]: 3,
      [VehicleAttr.accel]: 4,
      [VehicleAttr.speedInterval]: 10,
      [VehicleAttr.topSpeed]: 30,
      [VehicleAttr.body]: 0,
      [VehicleAttr.armor]: 0,
      [VehicleAttr.pilot]: 2,
      [VehicleAttr.sensor]: 1,
      [VehicleAttr.seat]: null,
    },

    slavedTo: rcc.id,
    pilotingSpeciality: 'Aircraft',
  }, [
    addGear(character, {...riggerInterface, id: 'b4ba0a55-150b-47b4-b391-cc1da213d48a'}),
  ])
}
