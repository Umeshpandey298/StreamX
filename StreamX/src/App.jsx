import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import MobileNavigation from "./components/mobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData } from "./store/movieoSlice";

function App() {
  const dispatch = useDispatch();
  const fetchTrendingOuts = async () => {
    try {
      const response = await axios.get("trending/all/week");

      dispatch(setBannerData(response.data.results));
    } catch (error) {
      console.log("error", error);
    }
  };

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchTrendingOuts = async () => {
  //   try {
  //     const response = await axios.get("trending/all/week");
  //     dispatch(setBannerData(response.data.results));
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching trending data:", error);
  //     setError("Failed to load trending content.");
  //     setLoading(false);
  //   }
  // };

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
