import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import config from './config';
import { CharacterSheetSchema } from './resolvers/CharacterSheetResolver';
import { graphqlHTTP } from 'express-graphql';
import { MongoMemoryServer } from 'mongodb-memory-server';

const app = express();

// CORS Middleware
app.use(cors());
// HTTP Logger Middleware
app.use(morgan('dev'));
// Bodyparser Middleware
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'dev') {
  console.info('Running in dev mode');
  const mongoServer = new MongoMemoryServer();
  mongoose.Promise = Promise;
  mongoServer.getUri().then((mongoUri) => {
    const mongooseOpts = {
      // options for mongoose 4.11.3 and above
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000,
    };

    mongoose.connect(mongoUri, mongooseOpts);

    mongoose.connection.on('error', (e) => {
      if (e.message.code === 'ETIMEDOUT') {
        console.log(e);
        mongoose.connect(mongoUri, mongooseOpts);
      }
      console.log(e);
    });

    mongoose.connection.once('open', () => {
      console.log(`MongoDB successfully connected to ${mongoUri}`);
    });
  });
} else {  
  console.info('Running in production mode');

  const {MONGO_URI, MONGO_DB_NAME} = config;
  const db = `${MONGO_URI}/${MONGO_DB_NAME}`;  
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
}


// Use resolvers
app.use('/api', graphqlHTTP({
  schema: CharacterSheetSchema,
  graphiql: true,
}));

// Serve static assets if in production
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});