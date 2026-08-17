import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { selectTheme } from "../features/theme/themeSlice";

function AppLayout() {
  const mode = useSelector(selectTheme);

  useEffect(() => {
    document.body.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
