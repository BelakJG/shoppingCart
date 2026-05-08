import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductButtons from "../components/productButtons";
import "../styles/shop.css"

export default function Shop({productData, error, loading, currentCart, updateCart}) {
    if (loading) {
        return(<h1>Loading!</h1>);
    }
    if (error) {
        throw error;
    }

    const handleCartChange = (index, event) => {
        const newValue = event.currentTarget.value;
        updateCart({...currentCart, [index]: newValue});
    }
    const decCart = (index) => {
        const newValue = +currentCart[index] - 1;
        if (newValue >= 0) updateCart({...currentCart, [index]: newValue});
    }
    const incCart = (index) => {
        const newValue = (+currentCart[index] || 0) + 1;
        updateCart({...currentCart, [index]: newValue});
    }

    const productCards = productData.map((product, index) => <div className="product" key={index}>
        <h4>{product.title}</h4>
        <img src={product.image}></img>
        <strong>Price: ${product.price.toFixed(2)}</strong>
        <ProductButtons currentCart={currentCart} updateCart={updateCart} index={index} />
    </div>);

    return (
        <div id="shop">
            <h1>Shop Page</h1>
            <div id="cards">{productCards}</div>
            <footer><p>Product info and images from <a href="https://fakestoreapi.com/" target="_blank" rel="noopener noreferrer">Fake Store API</a></p></footer>
        </ div>
    );
}