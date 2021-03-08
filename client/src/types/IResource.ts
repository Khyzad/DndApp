import { IRoll } from "./IRoll";

export interface IResource {
   name: string,
   description: string,
   count: number,
   max: number,
   roll: IRoll,
}