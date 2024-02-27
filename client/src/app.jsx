import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// import "client/src/app.css";
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
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  return (
    <ApolloProvider client={client}>
      <div>
        <Header userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
        <div className="container">
          <Outlet
            setUserLoggedIn={setUserLoggedIn}
            userLoggedIn={userLoggedIn}
          />
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
