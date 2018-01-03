'use strict'

const {graphql,buildSchema} = require('graphql')

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

graphql(schema,query,resolvers)
.then( (res) => console.log(res))
.catch( (err) => console.log(err))