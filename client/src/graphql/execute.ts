import axios from "axios";
import type { TypedDocumentString } from "./graphql";

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  try {
    const response = await axios.post(
      "/IthmaarPortalDev/graphql",
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/graphql-response+json",
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc0J1c2luZXNzVXNlciI6IkYiLCJhdXRob3JvdGllcyI6IlJPTEVfQ1VTVE9NRVIiLCJjbGllbnROYW1lIjoiTU9CIiwid3BwS2V5IjoxMjEwMywiY2xudEtleSI6MSwidXNyS2V5IjoxMTcwOCwiaXNNZXJjaGFudCI6IkYiLCJ1c2VyTmFtZSI6Im1hcndhdyIsImlhdCI6MTc1MzI3MjA1MywiZXhwIjoxNzUzMjkwMDUzfQ.uqWSOk873aF5nmWC-UWMciFVhmUi_nNPbPyh75FkZiwtyyZ3RtAvxuacTFKdkLU8i5ys1Wfz2tD9Z0OoOjeZOg`,
        },
      }
    );

    return response.data.data as TResult;
  } 
    catch (error: any) {
      if (error.response) {
        console.error("GraphQL execution error:", {
          status: error.response.status,
          statusText: error.response.statusText,
          data: error.response.data,
        });
      } else {
        console.error("Unexpected error:", error.message);
      }
      throw new Error("GraphQL execution error");
    } Error("GraphQL execution error");
}

