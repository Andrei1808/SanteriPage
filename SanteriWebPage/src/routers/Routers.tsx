import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import Contacts from "../pages/Contacts/Contacts";
import PcService from "../pages/PcService/PcService";
import NotFound from "../components/NotFound/NotFound";


export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="home" element={<Home />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="computer-service" element={<PcService />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
