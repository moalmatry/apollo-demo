import { useState } from "react";
import "./App.css";
import { useQuery, useMutation, gql } from "@apollo/client";

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      age
      name
      isMarried
    }
  }
`;

const GET_USER_BY_ID = gql`
  query GetUserById($id: ID!) {
    getUserById(id: $id) {
      id
      age
      name
      isMarried
    }
  }
`;

const Create_USER = gql`
  mutation CreateUser($name: String!, $age: Int!, $isMarried: Boolean!) {
    createUser(name: $name, age: $age, isMarried: $isMarried) {
      name
    }
  }
`;

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const {
    data: usersData,
    usersError,
    loading: usersLoading,
  } = useQuery(GET_USERS);

  const {
    data: userData,
    error: userError,
    loading: userLoading,
  } = useQuery(GET_USER_BY_ID, {
    variables: {
      id: "3",
    },
  });

  const [mutate] = useMutation(Create_USER);

  const addNewUserHandler = async () => {
    mutate({ variables: { name, age: Number(age), isMarried: false } });
    setAge("");
    setName("");
  };

  if (usersLoading) return <p>Loading...</p>;
  if (usersError) return <p>Error: {usersError.message}</p>;
  console.log("usersData", usersData);
  return (
    <>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name..."
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age..."
        />
        <button onClick={addNewUserHandler}>Create user</button>
      </div>
      <h1>User</h1>
      {userLoading && <p>Loading user...</p>}
      {userError && <p>Error: {userError.message}</p>}
      {userData && <h3>{userData.getUserById.name}</h3>}
      {userData && <h3>{userData.getUserById.age}</h3>}
      <h1>Users</h1>
      <div>Choose</div>

      <div>
        {usersData.getUsers.map((user) => (
          <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Married: {user.isMarried ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
