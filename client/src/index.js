import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PostsProvider } from "./contexts/PostsProvider";
import { DestinationProvider } from "./contexts/DestinationProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PostsProvider>
    <DestinationProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DestinationProvider>
  </PostsProvider>
);
