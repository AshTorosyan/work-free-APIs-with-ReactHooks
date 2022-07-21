import Header from "../Header/Header";
import Wrapper from "../Wrapper/Wrapper";
import {Routes, Route, NavLink} from "react-router-dom";
import Randomdog from "../../Pages/RandomDog/Randomdog";
import Randomuser from "../../Pages/RandomUser/Randomuser";
import University from "../../Pages/University/University";

const Navlink = () => {
    return(
     <Wrapper>
        <Header>
            <NavLink to="/randomuser">Random User</NavLink>
            <NavLink to="/university">University</NavLink>
            <NavLink to="/randomdog">Random Dog</NavLink>
        </Header>

        <Routes>
            <Route path="/randomuser" element={<Randomuser/>} />
            <Route path="/university" element={<University/>} />
            <Route path="/randomdog" element={<Randomdog/>} />
        </Routes>
     </Wrapper>
    );
}

export default Navlink;