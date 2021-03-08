import { IAction } from "./IAction";
import { IScore } from "./IScore";

export interface IShapeshift extends IAction {
   abilityScores: IScore,
   actions: IAction[]
}