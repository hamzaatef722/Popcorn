import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home, { loader as homeLoader } from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import BrowsePage from "./pages/BrowsePage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorMessage from "./ui/ErrorMessage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/browse",
        element: <BrowsePage />,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/title/:media_type/:id",
        element: <DetailsPage />,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/browse/:genreId",
        element: <BrowsePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        errorElement: <ErrorMessage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;

  // return (
  //   <Routes>
  //     <Route element={<AppLayout />}>
  //       <Route index element={<Home />} />
  //       <Route path="search" element={<SearchPage />} />
  //       <Route path="browse" element={<BrowsePage />} />
  //       <Route path="browse/:genreId" element={<BrowsePage />} />
  //       <Route path="title/:mediaType/:id" element={<DetailsPage />} />
  //       <Route path="profile" element={<ProfilePage />} />
  //       <Route path="*" element={<NotFoundPage />} />
  //     </Route>
  //   </Routes>
  // );
}

export default App;
