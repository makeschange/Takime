import AnimeDetail from "@/pages/AnimeDetail";
import Home from "@/pages/Home";
import RootPage from "@/pages/Root";
import { BrowserRouter, Routes, Route } from "react-router";

export default function RouteIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootPage />}>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<AnimeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
