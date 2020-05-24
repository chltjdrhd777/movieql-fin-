import { getMovies } from "../db/db";
//schema is a request from user
//and resolvers are the answer of the database
//If the database gets the Query {person} , then it would return Anderson {name,age,gender}
//the power of graphql is that I could choice the needed information like that
//Query {person:{name}} =  the answer is {person:{name:"Anderson"}}
//It is really selective and productive work I think...

//Second,
//about every Query, it has two properties
//1. current object : at this juncture, useless
//2. argument from users
//user can send like query{perosn(id:1)} <--- this id:1 is an argument which resolvers utilize.

//In short
//Query : calling
//Mutation : modulating the state
const resolvers = {
  Query: {
    currentMovies: (_, { limit, rating }) => getMovies(limit, rating),
  },
};

export default resolvers;
