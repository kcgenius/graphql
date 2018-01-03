'use strict'

const {graphql,buildSchema} = require('graphql')
const express = require('express')
const graphqlHTTP = require('express-graphql')

const PORT = process.env.PORT || 3000;
const server = express()

const schema = buildSchema(`
type Video {
    title: String,
    id:ID,
    duration:Int,
    watched:Boolean
}
type Query {
    video: Video,
    videos:[Video]
}
type Schema {
    video: Video
}
`);

const videoA = {
    id: '1',
    title:'Fop',
    duration: 1,
    watched: false,
}


const videoB = {
    id: '2',
    title:'Fopsds',
    duration: 1,
    watched: false,
}

const videos = [videoA,videoB]

const resolvers = {
    video: () => ({
        id: '1',
        title:'Fop',
        duration: 1,
        watched: false
    }),
    videos : () => videos,
};

const query = `
query myfirstQuery {
    videos {
        title,
        watched
    },
}
`;

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: resolvers,
}))

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})