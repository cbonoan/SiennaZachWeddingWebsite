import { Outlet } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <CustomNavbar />
            
            <Outlet />

            <Footer/>
        </>
    );
}

export default App;