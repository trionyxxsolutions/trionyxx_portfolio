import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { getRouter } from "./router";
import { TrionyxLoader } from "@/components/TrionyxLoader";
import "./styles.css";

const router = getRouter();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <AnimatePresence mode="wait">
        {loading ? (
          <TrionyxLoader key="Trionyx-loader" />
        ) : (
          <RouterProvider key="Trionyx-app" router={router} />
        )}
      </AnimatePresence>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);