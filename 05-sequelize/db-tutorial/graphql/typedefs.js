/**
 * gql interface
 */

const { gql } = require('apollo-server-express');

// tagged template literal
module.exports = gql`
    type Message {
        id: ID
        title: String
        user : User
        tags: [Tag]
    }

    type User {
        id: ID
        firstName: String
        messages: [Message]
    }

    type Tag {
        id: ID
        title : String
        messages: [Message]
    }

    type Query {
        findOne(id: ID!) : Message
        findAll : [Message]
        findUsers : [User]
    }

    type Mutation {
        create(title : String!) : Message
        update(id: ID!, title: String) : Message
        delete(id: ID!) : Boolean
    }
`

// 'hello 0.5 world'
// ['hello ', ' world ', ' foo '] , 0.5, 10, true
// function hello(myStr, rand, myNum, myBool) {

// }

// //hello(`hello ${Math.random()} world ${10} foo ${true}`)
// hello`hello ${Math.random()} world ${10} foo ${true}`