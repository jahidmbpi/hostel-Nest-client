import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { router } from "./components/route/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="max-w-full sm:max-w-7xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </StrictMode>
);
