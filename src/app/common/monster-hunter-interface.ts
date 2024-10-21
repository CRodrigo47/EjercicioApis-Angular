export interface MonsterHunterInterface{
    id: number
    type: string
    rarity: number
    attack: Attack
    elderseal?: string
    attributes: Attributes
    damageType?: string
    name: string
    durability?: Durability[]
    slots: Slot[]
    elements: Element[]
    crafting: Crafting
    assets?: Assets
    shelling?: Shelling
    phial?: Phial
    boostType?: string
    specialAmmo?: string
    deviation?: string
    ammo?: Ammo[]
    coatings?: string[]
  }
  
  export interface Attack {
    display: number
    raw: number
  }
  
  export interface Attributes {
    affinity: any
    defense?: number
    boostType?: string
    damageType?: string
    coatings?: string[]
    elderseal?: string
  }
  
  export interface Durability {
    red: number
    orange: number
    yellow: number
    green: number
    blue: number
    white: number
    purple: number
  }
  
  export interface Slot {
    rank: number
  }
  
  export interface Element {
    type: string
    damage: number
    hidden: boolean
  }
  
  export interface Crafting {
    craftable: boolean
    previous?: number
    branches: number[]
    craftingMaterials: CraftingMaterial[]
    upgradeMaterials: UpgradeMaterial[]
  }
  
  export interface CraftingMaterial {
    quantity: number
    item: Item
  }
  
  export interface Item {
    id: number
    rarity: number
    carryLimit: number
    value: number
    name: string
    description: string
  }
  
  export interface UpgradeMaterial {
    quantity: number
    item: Item2
  }
  
  export interface Item2 {
    id: number
    rarity: number
    carryLimit: number
    value: number
    name: string
    description: string
  }
  
  export interface Assets {
    icon?: string
    image: string
  }
  
  export interface Shelling {
    type: string
    level: number
  }
  
  export interface Phial {
    type: string
    damage?: number
  }
  
  export interface Ammo {
    type: string
    capacities: number[]
  }