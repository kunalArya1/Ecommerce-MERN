import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";
const App = () => {
  const fetchUserDetails = async () => {
    const dataResponse = await axios.get("/api//user-details", {
      withCredentials: true,
    });
    console.log("Datauser", dataResponse);
  };
  useEffect(() => {
    // function call
    fetchUserDetails();
  }, []);
  return (
    <div>
      <Header />
      <Toaster />
      <main className="min-h-[calc(100vh-120px)] pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
