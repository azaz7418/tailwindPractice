import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios"; //import issue chilo//

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1"; //base url onno project e set korsili//
const queryClint = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClint}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
