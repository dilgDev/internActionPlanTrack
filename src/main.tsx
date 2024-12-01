import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

//providere
import { ThemeProvider } from "./provider/ThemeProvider.tsx";
import { BrowserRouter, Routes, Route } from "react-router";

//routes
import CoorHome from "./routes/CoorHome.tsx";
import AuthPage from "@/routes/AuthPage.tsx";
import TraineeHome from "./routes/TraineeHome.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<App />}>
            <Route index element={<TraineeHome />} />

            <Route path="trainee" element={<TraineeHome />} />
            <Route path="coor" element={<CoorHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
