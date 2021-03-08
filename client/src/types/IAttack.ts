import { IAction } from "./IAction";
import { IRoll } from "./IRoll";

export interface IAttack extends IAction {
   name: string,
   roll: IRoll,
   saveDC: number,
   proficiency: boolean,
   description: string,
   damageType: string,
}