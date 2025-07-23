import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { execute } from "./graphql/execute";
import type { TypedDocumentString } from "./graphql/graphql";

const query = `
  query {
    attributesByModKey(
      modKey: 34, 
      rolKey: 2, 
      prcKey: 3, 
      wacKey: null, 
      lang: "EN"
    ) {
      maPageConttrolName
      apsRequired
      ahdHelp
      apsVisible
      ahdTooltip
      ahdCaption
      apsEnabled
    }
  }
` as unknown as TypedDocumentString<{
  attributesByModKey: {
    maPageConttrolName: string;
    apsRequired: boolean;
    ahdHelp: string;
    apsVisible: boolean;
    ahdTooltip: string;
    ahdCaption: string;
    apsEnabled: boolean;
  }[];
}, {}>;

function App() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["attributes"],
    queryFn: async () => await execute(query),
  });
  console.log("Data:", data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading</div>;

  return (
    <>
      <h1>Attributes by Mod Key</h1>
      {data?.attributesByModKey?.map((attr, index) => (
        <div key={index}>
          <h2>{attr.ahdCaption}</h2>
          <p>Control Name: {attr.maPageConttrolName}</p>
          <p>Tooltip: {attr.ahdTooltip}</p>
          <p>Visible: {attr.apsVisible ? "Yes" : "No"}</p>
          <p>Enabled: {attr.apsEnabled ? "Yes" : "No"}</p>
        </div>
      ))}
    </>
  );
}

export default App;
