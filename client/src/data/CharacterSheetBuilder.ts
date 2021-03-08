import CharacterSheet from "../components/CharacterSheet";
import { ICharacterSheet } from "../types/ICharacterSheet";
import {ISkillData} from "../types/ISkill";

export class CharacterSheetBuilder {
   newInstance = () => {
      let sheet: ICharacterSheet = {
         _userId: 'userId',
         _id: 'sheetId',
         type: 'dnd5e',
         hud: {
            level: 1,
            health: {
               temporary: 0,
               hitDice: 1,
               deathFail: 0,
               deathSave: 0,
            },
            inspiration: false,
            proficiencyBonus: 1,
            armorClass: 10,
            movement: 30,
            exhaustion: 0,
            alignment: 'Neutral',
            experiencePoints: 0
         },
         skills: {
            core: [
               {
                  name: 'Acrobatics',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'DEX'
               },
               {
                  name: 'Animal Handling',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'WIS'
               },
               {
                  name: 'Arcana',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'INT'
               },
               {
                  name: 'Athletics',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'STR'
               },
               {
                  name: 'Deception',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'CHA'
               },
               {
                  name: 'History',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'INT'
               },
               {
                  name: 'Insight',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'WIS'
               },
               {
                  name: 'Intimidation',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'CHA'
               },
               {
                  name: 'Investigation',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'INT'
               },
               {
                  name: 'Medicine',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'WIS'
               },
               {
                  name: 'Nature',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'INT'
               },
               {
                  name: 'Perception',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'WIS'
               },
               {
                  name: 'Performance',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'CHA'
               },
               {
                  name: 'Persuasion',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'CHA'
               },
               {
                  name: 'Religion',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'INT'
               },
               {
                  name: 'Acrobatics',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'Sleight of Hand'
               },
               {
                  name: 'Survival',
                  description: '',
                  proficiency: false,
                  abilityScore: 0,
                  miscellaneousBonus: 0,
                  total: 0,
                  type: 'WIS'
               },

            ],
            misc: [],
         },
         abilityScores: [
            {
               name: 'Strength',
               abbreviation: 'STR',
               score: 10,
               modifier: 0,
            },
            {
               name: 'Dexterity',
               abbreviation: 'DEX',
               score: 10,
               modifier: 0,
            },
            {
               name: 'Constitution',
               abbreviation: 'CON',
               score: 10,
               modifier: 0,
            },
            {
               name: 'Wisdom',
               abbreviation: 'WIS',
               score: 10,
               modifier: 0,
            },
            {
               name: 'Intelligence',
               abbreviation: 'INT',
               score: 10,
               modifier: 0,
            },
            {
               name: 'Charisma',
               abbreviation: 'CHA',
               score: 10,
               modifier: 0,
            },
         ],
         savingThrows: [
            {
               name: 'Strength',
               abbreviation: 'STR',
               proficiency: false,
               miscellaneous: 0,
            },
            {
               name: 'Dexterity',
               abbreviation: 'DEX',
               proficiency: false,
               miscellaneous: 0,
            },
            {
               name: 'Constitution',
               abbreviation: 'CON',
               proficiency: false,
               miscellaneous: 0,
            },
            {
               name: 'Wisdom',
               abbreviation: 'WIS',
               proficiency: false,
               miscellaneous: 0,
            },
            {
               name: 'Intelligence',
               abbreviation: 'INT',
               proficiency: false,
               miscellaneous: 0,
            },
            {
               name: 'Charisma',
               abbreviation: 'CHA',
               proficiency: false,
               miscellaneous: 0,
            },
         ],
         inventory: {
            wealth: {
               copper: 0,
               silver: 0,
               gold: 0,
               electrum: 0,
               platinum: 0,
            },
            items: []
         },
         background: {
            personality: '',
            bonds: '',
            ideals: '',
            flaws: '',
            description: '',
            age: 0,
            height: '',
            weight: '',
         },
         notes: '',
         spells: {
            slots: 0,
            saveDC: 8,
            cantrips: [],
            level1: [], 
            level2: [], 
            level3: [], 
            level4: [], 
            level5: [], 
            level6: [], 
            level7: [], 
            level8: [], 
            level9: [], 
            level10: [],
         },
         features: [],
         actions: [
            {
               name: 'Unarmed Strike',
               description: 'Instead of using a weapon to make a melee weapon attack, you can use an unarmed strike: a punch, kick, head-butt or similar forceful blow (none of which count as weapons). On a hit, an unarmed strike deals bludgeoning damage equal to 1 + your Strength modifier. You are proficient with your unarmed strikes.',
               saveDC: 2,
               proficiency: true,
               damageType: 'Bludgeoning',
               roll:{
                  quantity: 1,
                  die: 20,
                  bonus: 0,                  
               },               
            },            
         ],
         pets: [],
         resources: []
      };
      return sheet;
   }
}