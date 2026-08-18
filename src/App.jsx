import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home, { loader as homeLoader } from "./pages/Home";
import SearchPage, { loader as searchLoader } from "./pages/SearchPage";
import DetailsPage, { loader as detailsLoader } from "./pages/DetailsPage";
import BrowsePage, { loader as browseLoader } from "./pages/BrowsePage";
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
        loader: searchLoader,
      },
      {
        path: "/browse",
        element: <BrowsePage />,
        errorElement: <ErrorMessage />,
        loader: browseLoader,
      },
      {
        path: "/browse/:genreId",
        element: <BrowsePage />,
        loader: browseLoader,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/title/:media_type/:id",
        element: <DetailsPage />,
        errorElement: <ErrorMessage />,
        loader: detailsLoader,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/profile/:id",
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
