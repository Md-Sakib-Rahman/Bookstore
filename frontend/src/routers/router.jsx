import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home/Home"
const router= createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/orders",
                element: <div>orders</div>
            },
            {
                path:"/store",
                element: <div>store</div>
            }
        ]
    }
])
export default router;