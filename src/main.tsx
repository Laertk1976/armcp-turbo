import App from "./App";
import "./i18n/i18n.ts"; // Initialize i18next
import "./index.css"; // Tailwind CSS
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(<App />);
