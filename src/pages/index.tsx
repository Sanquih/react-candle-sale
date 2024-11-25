import { createBrowserRouter, Outlet, useLocation } from "react-router-dom";
import { Candle } from "./CreateCandle/Candle";
import { ViewEssence } from "./CreateCandle/ViewEssence";
import { ViewSize } from "./CreateCandle/ViewSize";
import { ViewStyle } from "./CreateCandle/ViewStyle";
import { ErrorDetails } from "./ErrorDetails";
import { Header } from "./Header";
import { Home } from "./Home";
import { ShoppingCar } from "./ShoppingCar";

type Props = {};

function Layout({}: Props) {
  const location = useLocation();

  return (
    <div className="w100 h100 viewDetails row">
      <Header />
      <div key={location.key} className="page-transition w100 h100 row">
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorDetails />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/essence", element: <ViewEssence /> },
      { path: "/size", element: <ViewSize /> },
      { path: "/style", element: <ViewStyle /> },
      { path: "/candle", element: <Candle /> },
      { path: "/shoppingcar", element: <ShoppingCar /> },
    ],
  },
]);

export default router;
