import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import { preloadRoute } from "./routes";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Routes are code-split; the current route's chunk must be resolved BEFORE
// hydration so the client tree matches the prerendered HTML synchronously
// (React.lazy would suspend and clobber the snapshot). See src/routes.tsx.
preloadRoute(window.location.pathname).then(() => {
  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, <App />);
  } else {
    createRoot(rootElement).render(<App />);
  }
});
