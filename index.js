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
}
type Schema {
    video: Video
}
`);


const resolvers = {
    video: () => ({
        id: '1',
        title:'Fop',
        duration: 1,
        watched: false
    }),
};

const query = `
query myfirstQuery {
    video {
        title,
        watched
    },
}
`;

graphql(schema,query,resolvers)
.then( (res) => console.log(res))
.catch( (err) => console.log(err))