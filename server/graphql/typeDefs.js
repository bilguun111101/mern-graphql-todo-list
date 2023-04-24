import { gql } from '@apollo/server';

export default gql`
type Recipe {
    name: String
    description: String
    createdAt: String
    thumbsUp: Int
    thumbsDown: Int
}

input RecipeInput {
    name: String
    description: String
}

type Query {
    recipe(ID: ID!): Recipe!
    getRecipe(amount: Int): [Recipe] 
}

type Mutation {
    createRecipe(recipeInput: RecipeInput): Recipe!
    deleteRecipe(ID: ID!): Boolean
    editRecipe(ID: ID!, recipeInput: RecipeInput)
}
`