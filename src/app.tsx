import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { CreateTripPage } from "./pages/creat.trip";
import { TripDetailsPage } from "./pages/trip-datails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />
  },
]);

export function App() {
  return <RouterProvider router={router} />
}
