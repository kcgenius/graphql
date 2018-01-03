'use strict'

const {graphql,buildSchema} = require('graphql')

const schema = buildSchema(`
type Query {
    foo: String
}
type Schema {
    query: Query
}
`);


const resolvers = {
    foo: () => 'bar',
};

const query = `
query myfirstQuery {
    foo
}
`;

graphql(schema,query,resolvers)
.then( (res) => console.log(res))
.catch( (err) => console.log(err))