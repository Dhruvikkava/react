import Feature from "../pages/Feature";
import Home from "../pages/Home";

export const routerList = [
  {
    path: "/home",
    element: <Home />,
    isAuth: false,
  },
  {
    path: "/features",
    element: <Feature />,
    isAuth: false,
  },
];
