import { Outlet } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar/CustomNavbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";

const App = () => {
    return (
        <>
            <ScrollToTop />

            <CustomNavbar />
            
            <Outlet />

            <Footer/>
        </>
    );
}

export default App;