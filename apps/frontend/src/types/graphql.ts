export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface Pokeball {
  readonly __typename?: 'Pokeball';
  readonly success: Scalars['Boolean'];
}

export interface Pokemon {
  readonly __typename?: 'Pokemon';
  readonly id: Scalars['Int'];
  readonly image: Scalars['String'];
  readonly name: Scalars['String'];
  readonly rate: Scalars['Int'];
  readonly score: Scalars['Int'];
  readonly sprite: Scalars['String'];
  readonly timestamp: Scalars['Int'];
}

export interface Query {
  readonly __typename?: 'Query';
  readonly pokeball: Pokeball;
  readonly pokemon: Pokemon;
}


export interface QueryPokeballArgs {
  playerScore: Scalars['Int'];
  pokemonId: Scalars['Int'];
}


export interface QueryPokemonArgs {
  location: Scalars['String'];
}
