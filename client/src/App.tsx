import { Graffle } from "graffle";
import { use, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

const App = () => {
  const graffle = Graffle.create().transport({
    url: "https://countries.trevorblades.com/graphql",
  });
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: async () =>
      await graffle.gql`
        query myQuery ($filter: [String!]) {
          countries (filter: { name: { in: $filter } }) {
            name
            continent {
              name
            }
          }
        }
      `.send({ filter: [`Canada`, `Germany`, `Japan`] }),
  });

  const { data: dataTwo, isLoading: isLoadingTwo } = useQuery({
    queryKey: ["dataTwo"],
    queryFn: async () =>
      await graffle.gql`
        query myQuery ($filter: [String!]) {
          countries (filter: { name: { in: $filter } }) {
            name
            continent {
              name
            }
          }
        }
      `.send({ filter: [`Canada`, `Germany`, `Japan`] }),
  });

  useEffect(() => {
    if (isLoading) {
      console.log("Loading data...");
    } else {
      console.log("Data loaded:", data);
    }

    if (isLoadingTwo) {
      console.log("Loading second data set...");
    } else {
      console.log("Second data loaded:", dataTwo);
    }
  }, [data, isLoading, dataTwo, isLoadingTwo]);
  return (
    <div>
      <h1>Welcome to My App</h1>
    </div>
  );
};

export default App;
