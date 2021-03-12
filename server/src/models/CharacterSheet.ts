import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const { String } = Schema.Types;

const CharacterSheetSchema = new Schema({
   _userId: { type: String, index: true },
   hud: {
      name: String,
      level: Number,
      classes: Array,
      race: String,
      health: {
         max: Number,
         current: Number,
         temporary: Number,
         hitDice: Number,
         deathSave: Number,
         deathFail: Number,
      }
   },   
}, {
   strict: false,
   timestamps: true,
});

export const CharacterSheet = mongoose.model('CharacterSheet', CharacterSheetSchema);