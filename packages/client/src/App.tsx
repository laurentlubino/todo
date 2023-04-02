import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { RequireAuth } from "./pages/login/RequireAuth";
import { LoginPage } from "./pages/login/LoginPage";
import { TodosPage } from "./pages/todos/TodosPage";
import { AuthProvider } from "./utils/auth";

const queryClient = new QueryClient();

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes>
            <Route>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <TodosPage />
                  </RequireAuth>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </MantineProvider>
  );
}
