import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/',
        element: <HomePage />
    }
])