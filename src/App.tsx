import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import ProDesignHome from "./components/home/ProDesignHome";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="overflow-auto h-screen w-full">
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Routes>
          <Route path="/" element={<ProDesignHome />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
