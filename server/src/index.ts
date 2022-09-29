import 'reflect-metadata';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { buildSchema } from 'type-graphql';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import { ActorResolver } from './resolvers/Actor';
import pubsub from './lib/PubSub';

const PORT = process.env.PORT || 4000;

const main = async () => {
  try {
    // Create an Express app and HTTP server; we will attach the WebSocket
    // server and the ApolloServer to this HTTP server.
    const app = express();
    const httpServer = createServer(app);

    // Create schema, which will be used separately by ApolloServer and
    // the WebSocket server.
    const schema = await buildSchema({
      resolvers: [ActorResolver],
      pubSub: pubsub
    });

    // Set up WebSocket server.
    const wsServer = new WebSocketServer({
      server: httpServer,
      path: '/graphql'
    });
    const serverCleanup = useServer({ schema }, wsServer);

    // Set up ApolloServer.
    const server = new ApolloServer({
      schema,
      plugins: [
        // Proper shutdown for the HTTP server.
        ApolloServerPluginDrainHttpServer({ httpServer }),

        // Proper shutdown for the WebSocket server.
        {
          async serverWillStart() {
            return {
              async drainServer() {
                await serverCleanup.dispose();
              }
            };
          }
        }
      ]
    });
    await server.start();
    server.applyMiddleware({ app });

    // Now that our HTTP server is fully set up, actually listen.
    httpServer.listen(PORT, () => {
      console.log(
        `🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`
      );
      console.log(
        `🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`
      );
    });
  } catch (err) {
    console.error(err);
  }
};

main().catch((err) => console.log(err));
