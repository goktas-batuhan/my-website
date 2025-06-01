import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DarkModeProvider } from "./contexts/DarkModeContext.jsx";
import { DataProvider } from "./contexts/DataContext.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";

createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <DarkModeProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </DarkModeProvider>
  </LanguageProvider>
);
