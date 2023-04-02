import { MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./pages/login/RequireAuth";
import { LoginPage } from "./pages/login/LoginPage";
import { TodosPage } from "./pages/todos/TodosPage";
import { AuthProvider } from "./utils/auth";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
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
    </MantineProvider>
  );
}
