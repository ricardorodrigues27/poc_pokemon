import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { PokemonsContainer } from "./containers/PokemonsContainer";
import "./App.css";

const CLIENT = new ApolloClient({
  uri: "https://graphql-pokemon2.vercel.app",
});

function App() {
  return (
    <ApolloProvider client={CLIENT}>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
