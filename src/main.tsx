import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UserProvider from "./context/userContext";
import { RouterProvider } from "react-router";
import Router from "./Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import GoogleInit from "./GoogleInit";
import CategoryProvider from "./context/categoryContext";
import SortProvider from "./context/sortContext";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
        <GoogleInit />
      <CategoryProvider>
        <SortProvider>
        <Toaster />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router}></RouterProvider>
        </QueryClientProvider>
        </SortProvider>
      </CategoryProvider>
    </UserProvider>
  </StrictMode>
);
