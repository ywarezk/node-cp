{
    type Message {
        id: ID
        title: String
    }

    type Query {
        findOne(id: ID!) : Message
        findAll : [Message]
    }

    type Mutation {
        create(title : String!) : Message
        update(id: ID!, title: String) : Message
        delete(id: ID!) : void
    }
}