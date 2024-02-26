import colors from "colors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolvers.js";

// init
dotenv.config();

// environment vars
const PORT = process.env.PORT || 9090;

// init server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// listen
const serverListen = async () => {
  await startStandaloneServer(server, {
    listen: {
      port: PORT,
    },
  });
  console.log(`server is running on ${PORT}`.bgCyan.black);
};

serverListen();
