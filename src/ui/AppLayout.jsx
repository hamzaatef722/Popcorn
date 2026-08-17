import { useEffect } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { selectTheme } from "../features/theme/themeSlice";
import Loader from "./Loader";

function AppLayout() {
  const mode = useSelector(selectTheme);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  useEffect(() => {
    document.body.classList.toggle("dark", mode === "dark");
  }, [mode]);

  return isLoading ? (
    <Loader />
  ) : (
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
