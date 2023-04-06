import { Voyager } from "graphql-voyager";
import { useCallback } from "react";

const makeIntrospectionProvider = (endpoint: string) => (query: string) => {
  return fetch(endpoint, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: query }),
    mode: "cors"
  }).then((response) => response.json());
}

function GraphVisualizer({ graphqlEndpoint }: { graphqlEndpoint: string }) {
  const introspectionProvider = useCallback(makeIntrospectionProvider(graphqlEndpoint), [graphqlEndpoint])
  return <Voyager introspection={introspectionProvider} />;
}

export default GraphVisualizer;
