import Navbar from "./navbar/Navbar";
import Ticker from "../../ticker/Ticker";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> 
      <Ticker />
      <Footer />
    </>
  );
}