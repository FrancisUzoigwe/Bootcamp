import {createBrowserRouter} from "react-router-dom"
import FirstLayout from "../Components/Common/FirstLayout"
import LandingPage from "../Pages/Auth/LandingPage"

export const mainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <FirstLayout/>,
        children: [
            {
                index: true, 
                element: <LandingPage/>,
                path: "/"
            }
        ]
    }
])