import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Vans from "./vans.jsx";
import VanDetail from "./VansDetail";
import "./server.js";
import Layout from "../components/Layout.jsx";
import Dashboard from "./Host/Dashboard.jsx";
import Reviews from "./Host/Reviews.jsx";
import Income from "./Host/Income.jsx";
import HostLayout from "../components/HostLayout.jsx";
import HostVans from "./Host/HostVans.jsx";
import HostVanDetail from "./Host/HostVanDetail";
import HostVanInfo from "./Host/HostVanInfo";
import HostVanPricing from "./Host/HostVanPricing";
import HostVanPhotos from "./Host/HostVanPhotos";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
