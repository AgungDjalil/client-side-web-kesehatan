import { Router, RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
