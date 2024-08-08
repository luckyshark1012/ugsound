import { Outlet } from "react-router-dom";
import HeaderComponent from "../header";



const MainLayout = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    )
};

export default MainLayout;