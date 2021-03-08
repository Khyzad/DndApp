import { Damage } from "./Damage";

export default interface IWeapon {
   name: string,
   proficiency: boolean,
   attackBonus: number,
   damageDice: string,
   damageType: Damage,   
};