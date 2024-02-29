import Container from "react-bootstrap/Container";
import "./style/home.css";
import { React, useState } from "react";
import DynamicCard from "../components/dynamic_card";
import Login from "./newLogin.jsx";
import Auth from "../utils/auth.js";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useOutletContext } from "react-router-dom";
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

export default function Home() {
  const [userLoggedIn, setUserLoggedIn] = useOutletContext();
  if (Auth.loggedIn() || userLoggedIn == true) {
    return (
      <Container>
        <div className="background-gradient p-3 mt-3 mb-3 border rounded border-dark">
          <h2 className="mb-3">Welcome to Solarise Solar Employee Training</h2>
          <h4>Instructions:</h4>
          <ul>
            <li>Select a module below to begin your training</li>
            <li>
              Within each module are videos that you will need to complete along
              with additional instructions
            </li>
            <li>
              Mark each video as complete as you have watched it, videos are
              available to refer back to after you have completed
            </li>
            <li>
              Reach out to your supervisor once you have completed each module
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-4 mb-2">
            <DynamicCard
              imageUrl="/assets/Full_logo.png"
              gi
              title="Module Day 1"
              description="Description for Day 1"
            />
          </div>
          <div className="col-md-4 mb-2">
            <DynamicCard
              imageUrl="/assets/Full_logo.png"
              title="Module Day 2"
              description="Description for Day 2"
            />
          </div>
          <div className="col-md-4 mb-2">
            <DynamicCard
              imageUrl="/assets/Full_logo.png"
              title="Module Day 3"
              description="Description for Day 3"
            />
          </div>
          <div className="col-md-4 mb-2">
            <DynamicCard
              imageUrl="/assets/Full_logo.png"
              title="Module Day 4"
              description="Description for Day 4"
            />
          </div>
          <div className="col-md-4 mb-2">
            <DynamicCard
              imageUrl="/assets/Full_logo.png"
              title="Module Day 5"
              description="Description for Day 5"
            />
          </div>
          <div className="col-md-4 mb-2">
            <DynamicCard
              imageUrl="/assets/Full_logo.png"
              title="Review/Homework"
              description="Description Homework"
            />
          </div>
        </div>
      </Container>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <Login userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
      </ApolloProvider>
    );
  }
}
