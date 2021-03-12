import { makeExecutableSchema } from 'graphql-tools';
import { CharacterSheet } from '../models/CharacterSheet';
import { ObjectId } from 'mongodb';

const typeDefs = `
   scalar GraphQLJSONObject 
   scalar GraphQLJSON
   scalar _id
   scalar characterSheet
   
   type Query {
      characterSheet(_id: String): GraphQLJSONObject
   }

   type Mutation {
      save(characterSheet: GraphQLJSON): ID
   }
`;

const resolvers = {
   Query: {
      characterSheet: async (_, { _id }) => {
         try {
            if (!_id) {
               throw new Error('_id is ' + _id)
            }

            return await CharacterSheet.findById(_id);
         } catch (ex) {
            return ex;
         }
      },
   },
   Mutation: {
      save: async (_, { characterSheet }) => {
         try {
            if (!characterSheet) {
               throw new Error('character sheet is ' + characterSheet)
            }

            const doc = await CharacterSheet.findByIdAndUpdate(characterSheet._id ?? new ObjectId(), characterSheet, {
               new: true,
               upsert: true,
            });
            
            return doc._id;
         } catch (ex) {
            return ex;
         }
      }
   }
};

export const CharacterSheetSchema = makeExecutableSchema({ typeDefs, resolvers });