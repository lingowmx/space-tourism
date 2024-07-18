//Hooks
import { useRoutes, BrowserRouter } from "react-router-dom";
//Components
import { Home } from "../Home";
import { Destination } from "../Destination";
import { Crew } from "../Crew";
import { Technology } from "../Technology";
import { Navbar } from "../../components/Layout/Navbar";
import { SpaceProvider } from "../../components/Layout/Context";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/destination", element: <Destination /> },
    { path: "/crew", element: <Crew /> },
    { path: "/technology", element: <Technology /> },
  ]);
  return routes;
};

const App = () => {
  return (
    <SpaceProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </SpaceProvider>
  );
};
export default App;
