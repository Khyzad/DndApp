export interface ISkill {
   core: ISkillData[],
   misc: ISkillData[],
}

export interface ISkillData {
   name: string,
   description: string,
   proficiency: boolean,
   abilityScore: number,
   miscellaneousBonus: number,
   total: number,
   type: string,
}

export const skillnames: string[] = [

];

/*
Acrobatics (Dex)
Animal Handling (Wis)
Arcana (Int)
Athletics (Str)
Deception (Cha)
History (Int)
Insight (Wis)
Intimidation (Cha)
Investigation (Int)
Medicine (Wis)
Nature (Int)
Perception (Wis)
Performance (Cha)
Persuasion (Cha)
Religion (Int)
Sleight of Hand (Dex)
Stealth (Dex)
Survival (Wis)
*/