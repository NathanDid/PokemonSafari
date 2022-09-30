import * as Types from 'types/graphql'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PokemonQueryVariables = Types.Exact<{
  location: Types.Scalars['String'];
}>;


export type PokemonQuery = { readonly __typename?: 'Query', readonly pokemon: { readonly __typename?: 'Pokemon', readonly id: number, readonly name: string, readonly image: string, readonly sprite: string, readonly score: number, readonly rate: number, readonly timestamp: number } };


export const PokemonDocument = gql`
    query Pokemon($location: String!) {
  pokemon(location: $location) {
    id
    name
    image
    sprite
    score
    rate
    timestamp
  }
}
    `

/**
 * __usePokemonQuery__
 *
 * To run a query within a React component, call `usePokemonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokemonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokemonQuery({
 *   variables: {
 *      location: // value for 'location'
 *   },
 * });
 */
export function usePokemonQuery(baseOptions: Apollo.QueryHookOptions<PokemonQuery, PokemonQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options)
}
export function usePokemonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PokemonQuery, PokemonQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<PokemonQuery, PokemonQueryVariables>(PokemonDocument, options)
}
export type PokemonQueryHookResult = ReturnType<typeof usePokemonQuery>;
export type PokemonLazyQueryHookResult = ReturnType<typeof usePokemonLazyQuery>;
export type PokemonQueryResult = Apollo.QueryResult<PokemonQuery, PokemonQueryVariables>;