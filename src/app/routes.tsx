import { createBrowserRouter } from "react-router";
import Root from "./components/Root";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import About from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "team", Component: Team },
      { path: "contact", Component: Contact },
    ],
  },
]);
