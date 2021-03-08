import { IAction } from "./IAction";

export interface IItem {
   name: string,
   quantity: number,
   description: string,
   actions?: IAction[],
   attuned: boolean,
   rarity: string,
   weight: number,
   tags: string[],
   cost: string,
}