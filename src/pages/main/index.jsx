import { Outlet } from "react-router-dom";
import HeaderComponent from "../../components/header";



const Main = () => {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    )
};

export default Main;