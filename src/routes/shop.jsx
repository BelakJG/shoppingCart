import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
        const newArr = [...currentCart];
        newArr[index] = newValue;
        updateCart(newArr);
    }
    const decCart = (index) => {
        const newArr = [...currentCart];
        if (newArr[index] > 0) newArr[index] -= 1;
        updateCart(newArr);
    }
    const incCart = (index) => {
        const newArr = [...currentCart];
        newArr[index] += 1;
        updateCart(newArr);
    }

    const productCards = productData.map((product, index) => <div className="product" key={index}>
        <h4>{product.title}</h4>
        <img src={product.image}></img>
        <p>Price: ${product.price}</p>
        <div className="cartCount">
            <button type="button" onClick={() => decCart(index)}>-</button>
            <input type="number" value={currentCart[index]} onChange={(event) => handleCartChange(index, event)}></input>
            <button type="button" onClick={() => incCart(index)}>+</button>
        </div>
    </div>);

    return (<div id="shop">
        <h1>Shop Page</h1>
        <div id="cards">{productCards}</div>
        <footer><p>Product info and images from <a href="https://fakestoreapi.com/" target="_blank" rel="noopener noreferrer">Fake Store API</a></p></footer>
    </ div>);
}