export const typeDefs = `#graphql
        
    type Developer {
        id : ID!,
        name : String!,
        age : Int,
        skills : [String!],
        email : String!,
        location : String,
        isMarried : Boolean
    }

    type Student {
        id : ID!,
        name : String!,
        age : Int,
        email : String!,
        location : String,
    }

    type Project {
        id : ID!,
        title : String!,
        desc : String,
        link : String
    }

    type Customer {
        id : ID!,
        name : String!,
        orders : [String!],
    }


    type Query {
       developers : [Developer],
       developer (id: ID) : Developer,
       students : [Student],
       projects : [Project],
       customers : [Customer]
    }
`;
