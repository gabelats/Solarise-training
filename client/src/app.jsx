//IMPORTS
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Connection to Authorization
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

//
// App function and
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(
    localStorage.getItem("userLoggedIn") === "true"
  );
  useEffect(() => {
    localStorage.setItem("userLoggedIn", userLoggedIn);
  }, [userLoggedIn]);

  const [admin, setAdmin] = useState(false);
  return (
    <ApolloProvider client={client}>
      <div>
        <Header
          userLoggedIn={userLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
          admin={admin}
          setAdmin={setAdmin}
        />
        <div className="container">
          <Outlet context={[userLoggedIn, setUserLoggedIn, admin, setAdmin]} />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
