import { IAbility } from "./IAbility";
import { IAction } from "./IAction";
import { IAttack } from "./IAttack";
import { IClass } from "./IClass";
import { IFeature } from "./IFeature";
import { IItem } from "./IItem";
import { IPassive } from "./IPassive";
import { IResource } from "./IResource";
import { ISavingThrow } from "./ISavingThrow";
import { IScore } from "./IScore";
import { IShapeshift } from "./IShapeshift";
import { ISkill } from "./ISkill";

export interface ICharacterSheet {
   _userId: string,
   _id: string,
   type: string,
   hud: {
      name?: string,
      level: number,
      classes?: IClass[], 
      race?: string,
      health: {
         max?: number,
         current?: number,
         temporary: number,
         hitDice: number,
         deathSave: number,
         deathFail: number,
      },
      initiative?: number,
      inspiration: boolean,
      proficiencyBonus: number,
      armorClass: number,
      movement: number,
      exhaustion: number,
      passives?: IPassive[],
      portrait?: string,      
      alignment: string,
      experiencePoints: number,
   },
   skills: ISkill,
   abilityScores: IAbility[],
   savingThrows: ISavingThrow[],
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
      ideals: string,
      flaws: string,
      description: string,
      age: number,
      height: string,
      weight: string,
   },
   notes: string,
   spells: {
      slots: number,
      saveDC: number,
      cantrips: [], // ISpell
      level1: [], // ISpell
      level2: [], // ISpell
      level3: [], // ISpell
      level4: [], // ISpell
      level5: [], // ISpell
      level6: [], // ISpell
      level7: [], // ISpell
      level8: [], // ISpell
      level9: [], // ISpell
      level10: [], // ISpell
   }, // ISpell
   features: IFeature[], // IFeature
   actions: IShapeshift[] | IAttack[], // IAction,
   pets: [], // IPet
   resources: IResource[],
}