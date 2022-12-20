import { createBrowserRouter } from "react-router-dom";
import AddProoducts from "../Dashboard/AddProduct/AddProoducts";
import AllProducts from "../Dashboard/AllProducts/AllProducts";
import AllUser from "../Dashboard/AllUser/AllUser";
import MyOrder from "../Dashboard/MyOrder/MyOrder";
import MyProduct from "../Dashboard/MyProduct/MyProduct";
import Home from "../Home/Home/Home";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Login from "../Login/Login/Login";
import Register from "../Login/Register/Register";
import MyShop from "../Shared/Navbar/Navbar2/MyShop";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import SellerRoute from "./SellerRoute/SellerRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myshop',
                element: <MyShop></MyShop>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/allUser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/allProducts',
                element: <AdminRoute><AllProducts></AllProducts></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProoducts></AddProoducts></SellerRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            }
        ]
    }
])


export default router;