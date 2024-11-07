import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import MobileNavigation from "./components/mobileNavigation";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const fetchTrendingOuts = async () => {
    try {
      const response = await axios.get("trending/all/week");
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchTrendingOuts();
  }, []);

  return (
    <main className="pb-14 lg:pb-0">
      <Header />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <MobileNavigation />
    </main>
  );
}

export default App;
