import dotenv from 'dotenv';
import mongoose from "mongoose";
import { ApolloServer } from "@apollo/server";

dotenv.config();
const port = process.env.PORT || 4000;
const MONGO_URL = process.env.MONGO_URL || "";

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGO_URL, { useNewUrlParser: true }).then(() => {
    console.log(`MongoDB Connection successful`);
    return server.listen({ port });
}).then((res) => {
    console.log(`Server is running at ${res.url}`);
})