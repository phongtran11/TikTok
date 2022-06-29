import { HeaderOnly } from "../component/Layout";
import Home from "../pages/Home";
import Follwing from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload";
import Search from "../pages/Search";
export const privateRoutes = [];

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/follwing",
    component: Follwing,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
];
