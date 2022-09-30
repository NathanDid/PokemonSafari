import * as Types from 'types/graphql'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {} as const
export type PokeballQueryVariables = Types.Exact<{
  pokemonId: Types.Scalars['Int'];
  playerScore: Types.Scalars['Int'];
}>;


export type PokeballQuery = { readonly __typename?: 'Query', readonly pokeball: { readonly __typename?: 'Pokeball', readonly success: boolean } };


export const PokeballDocument = gql`
    query Pokeball($pokemonId: Int!, $playerScore: Int!) {
  pokeball(pokemonId: $pokemonId, playerScore: $playerScore) {
    success
  }
}
    `

/**
 * __usePokeballQuery__
 *
 * To run a query within a React component, call `usePokeballQuery` and pass it any options that fit your needs.
 * When your component renders, `usePokeballQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePokeballQuery({
 *   variables: {
 *      pokemonId: // value for 'pokemonId'
 *      playerScore: // value for 'playerScore'
 *   },
 * });
 */
export function usePokeballQuery(baseOptions: Apollo.QueryHookOptions<PokeballQuery, PokeballQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<PokeballQuery, PokeballQueryVariables>(PokeballDocument, options)
}
export function usePokeballLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PokeballQuery, PokeballQueryVariables>) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<PokeballQuery, PokeballQueryVariables>(PokeballDocument, options)
}
export type PokeballQueryHookResult = ReturnType<typeof usePokeballQuery>;
export type PokeballLazyQueryHookResult = ReturnType<typeof usePokeballLazyQuery>;
export type PokeballQueryResult = Apollo.QueryResult<PokeballQuery, PokeballQueryVariables>;