import { NavLink } from "react-router-dom";
import ProductButtons from "../components/productButtons";
import "../styles/cart.css";

export default function Cart({ productData, error, loading, currentCart, updateCart }) {
    if (loading) {
        return(<h1>Loading...</h1>);
    }
    if (error) {
        throw error;
    }

    const cartCount = Object.values(currentCart).reduce((sum, value) => sum + +value, 0);
    const cartItems = Object.entries(currentCart)
                        .filter(([index, value]) => value > 0)
                        .map(([index, value]) => <div className="cartItem" key={index}>
                            <h4>{productData[index].title}</h4>
                            <img src={productData[index].image}></img>
                            <strong>Total Price: ${(productData[index].price * value).toFixed(2)}</strong>
                            <ProductButtons currentCart={currentCart} updateCart={updateCart} index={index}/>
                        </div>);
    const cartPrice = Object.entries(currentCart)
                        .filter(([index, value]) => value > 0)
                        .reduce((sum, [index, value]) => {
                            return sum + (productData[index].price * value)
                        }, 0);

    return(<div id="cart">
        <div id="cartItems">{cartItems}</div>
        <div id="cartCheckout">
            <h1>Total Items: {cartCount}</h1>
            <h3>Total Price: {cartPrice.toFixed(2)}</h3>
            <button type="button" id="checkoutBtn">Check Out</button>
        </div>
    </div>);
}