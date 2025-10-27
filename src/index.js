import ReactDOM from "react-dom/client";
import App from "./App";
import ScrollToTop from "react-scroll-to-top";
import { LanguageProvider } from './Home/LanguageContext';
ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <App />
    <ScrollToTop smooth />
  </LanguageProvider>
);
