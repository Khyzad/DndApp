import { makeExecutableSchema } from 'graphql-tools';
import { CharacterSheet } from '../models/CharacterSheet';
import { ObjectId } from 'mongodb';

const typeDefs = `
   scalar GraphQLJSONObject 
   scalar GraphQLJSON
   scalar _id
   scalar characterSheet
   
   type Query {
      characterSheet(_id: String!): GraphQLJSONObject
   }

   type Mutation {
      save(characterSheet: GraphQLJSON!): ID
      delete(_id: ID!): ID
   }
`;

const resolvers = {
   Query: {
      characterSheet: async (_, { _id }) => {
         try {            
            return await CharacterSheet.findById(_id);
         } catch (ex) {
            return ex;
         }
      },
   },
   Mutation: {
      save: async (_, { characterSheet }) => {
         try {
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