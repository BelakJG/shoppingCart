import { NavLink, Outlet } from "react-router-dom";
import "../styles/root.css";

export default function Root({currentCart}) {
    const cartCount = Object.values(currentCart).reduce((sum, value) => sum + +value, 0);

    return(<>
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="shop">Shop</NavLink>
                <NavLink to="cart">Cart ({cartCount})</NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </>);
}