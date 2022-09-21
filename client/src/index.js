import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PostsProvider } from "./contexts/PostsProvider";
import { DestinationProvider } from "./contexts/DestinationProvider";
import { ContextProvider } from "./contexts/userContext/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <PostsProvider>
      <DestinationProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </DestinationProvider>
    </PostsProvider>
  </ContextProvider>
);
