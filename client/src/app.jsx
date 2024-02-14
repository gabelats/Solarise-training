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
import Auth from "./utils/auth.js";
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

  const [userLoggedIn, setUserLoggedIn] = useState(true);
  if (Auth.loggedIn() || userLoggedIn == true) {
    return (
      <ApolloProvider client={client}>
        <div>
          <Header
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
          />
          <div className="container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </ApolloProvider>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <Login userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      </ApolloProvider>
    );
  }
}

export default App;
