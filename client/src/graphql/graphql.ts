/* eslint-disable */
import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Continent = {
  __typename?: "Continent";
  code: Scalars["ID"]["output"];
  countries: Array<Country>;
  name: Scalars["String"]["output"];
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Country = {
  __typename?: "Country";
  awsRegion: Scalars["String"]["output"];
  capital?: Maybe<Scalars["String"]["output"]>;
  code: Scalars["ID"]["output"];
  continent: Continent;
  currencies: Array<Scalars["String"]["output"]>;
  currency?: Maybe<Scalars["String"]["output"]>;
  emoji: Scalars["String"]["output"];
  emojiU: Scalars["String"]["output"];
  languages: Array<Language>;
  name: Scalars["String"]["output"];
  native: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  phones: Array<Scalars["String"]["output"]>;
  states: Array<State>;
  subdivisions: Array<Subdivision>;
};

export type CountryNameArgs = {
  lang?: InputMaybe<Scalars["String"]["input"]>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
};

export type Language = {
  __typename?: "Language";
  code: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  native: Scalars["String"]["output"];
  rtl: Scalars["Boolean"]["output"];
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  __typename?: "Query";
  continent?: Maybe<Continent>;
  continents: Array<Continent>;
  countries: Array<Country>;
  country?: Maybe<Country>;
  language?: Maybe<Language>;
  languages: Array<Language>;
};

export type QueryContinentArgs = {
  code: Scalars["ID"]["input"];
};

export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};

export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};

export type QueryCountryArgs = {
  code: Scalars["ID"]["input"];
};

export type QueryLanguageArgs = {
  code: Scalars["ID"]["input"];
};

export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};

export type State = {
  __typename?: "State";
  code?: Maybe<Scalars["String"]["output"]>;
  country: Country;
  name: Scalars["String"]["output"];
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nin?: InputMaybe<Array<Scalars["String"]["input"]>>;
  regex?: InputMaybe<Scalars["String"]["input"]>;
};

export type Subdivision = {
  __typename?: "Subdivision";
  code: Scalars["ID"]["output"];
  emoji?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
};

export type ContinentsQueryVariables = Exact<{ [key: string]: never }>;

export type ContinentsQuery = {
  __typename?: "Query";
  continents: Array<{ __typename?: "Continent"; code: string; name: string }>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<
    DocumentTypeDecoration<TResult, TVariables>["__apiType"]
  >;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const ContinentsDocument = new TypedDocumentString(`
    query Continents {
  continents {
    code
    name
  }
}
    `) as unknown as TypedDocumentString<
  ContinentsQuery,
  ContinentsQueryVariables
>;
