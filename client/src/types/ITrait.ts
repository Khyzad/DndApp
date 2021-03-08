import { Attribute } from "./Attribute";

export default interface ITrait {
   name: string,
   attributeType: Attribute,
};

export const Traits: ITrait[] = [
   { name: 'STRENGTH', attributeType: Attribute.STR },
   { name: 'CONSTITUTION', attributeType: Attribute.CON },
   { name: 'DEXTERITY', attributeType: Attribute.DEX },
   { name: 'WISDOM', attributeType: Attribute.WIS },
   { name: 'INTELLIGENCE', attributeType: Attribute.INT },
   { name: 'CHARISMA', attributeType: Attribute.CHA },
];

