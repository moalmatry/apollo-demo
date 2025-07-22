import { useQuery } from "@tanstack/react-query";
import "./App.css";
import { graphql } from "./graphql";
import { execute } from "./graphql/execute";

function App() {
  // current api  https://countries.trevorblades.com/graphql
  // const [count, setCount] = useState(0);
  const country = graphql(`
    query Continents {
      continents {
        code
        name
      }
    }
  `);
  const testHandler = async () => {
    const { continents } = await execute(country);
    alert(continents.map((c) => c.name).join(", "));
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["continents"],
    queryFn: async () => await execute(country),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading {isError}</div>;
  return (
    <>
      <h1>Hello World</h1>
      <button onClick={testHandler}>Test</button>
      <h1>All Continents</h1>
      {data?.continents.map((continent) => (
        <div key={continent.code}>
          <h2>{continent.name}</h2>
          <p>Code: {continent.code}</p>
        </div>
      ))}
    </>
  );
}

export default App;
