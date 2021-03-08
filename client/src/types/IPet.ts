import { IAbility } from "./IAbility";
import { IAction } from "./IAction";
import { IItem } from "./IItem";
import { IPassive } from "./IPassive";
import { IResource } from "./IResource";
import { IScore } from "./IScore";

export interface IPet {
   _id: string,
   _characterSheetId: string,
   hud: {
      name: string,
      level: number,      
      race: string,
      health: {
         max: number,
         current: number,
         temporary: number,
         hitDice: number,
      },
      initiative: number,
      inspiration: number,
      proficiencyBonus: number,
      armorClass: number,
      movement: number,
      exhaustion: number,
      passives: IPassive[],
      portrait: string,
   },
   abilityScores: IScore,
   savingThrows: IScore,
   inventory: {
      wealth: {
         copper: number,
         silver: number,         
         gold: number,
         electrum: number,
         platinum: number
      },
      items: IItem[] // IItem
   },
   background: {
      personality: string,
      bonds: string,
      traits: string,
      description: string,
      age: number,
      height: number,
      weight: number,
   },
   features: [], // IFeature
   actions: IAction[], // IAction,   
   resources: IResource[],
}