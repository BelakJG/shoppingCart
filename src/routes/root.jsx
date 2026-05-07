import { NavLink, Outlet } from "react-router-dom";
import "../styles/root.css";

export default function Root() {
    return(<>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="shop">Shop</NavLink>
                <NavLink to="cart">Cart</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </>);
}