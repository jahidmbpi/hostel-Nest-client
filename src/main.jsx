import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { router } from "./components/route/Routes.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-full sm:max-w-7xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
