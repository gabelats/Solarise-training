import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Login from "./pages/login.jsx";
import { useState } from "react";
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

function App() {
  //                     !change to default false before deploy!
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <ApolloProvider client={client}>
      {loggedIn ? (
        <div>
          <Header />
          <div className="container">
            <Outlet loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          </div>
          <Footer />
        </div>
      ) : (
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}
    </ApolloProvider>
  );
}

export default App;
