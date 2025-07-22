import axios from "axios";
import type { TypedDocumentString } from "./graphql";

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  try {
    const response = await axios.post(
      "https://countries.trevorblades.com/graphql",
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/graphql-response+json",
        },
      }
    );

    return response.data.data as TResult;
  } catch (error) {
    console.error("GraphQL execute =>", error);
    throw new Error("GraphQL execution error");
  }
}
