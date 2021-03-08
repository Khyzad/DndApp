import { IRoll } from "./IRoll";

export interface ISpell {
   name: string,
   description: string,
   concentration: boolean,
   prepared: boolean,
   duration: number,
   castingTime: number,
   range: number,
   school: string,
   roll: IRoll,
}