import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/shop.css"

export default function Shop({productData, error, loading}) {
    if (loading) {
        return(<h1>Loading!</h1>);
    }
    if (error) {
        throw error;
    }

    const productCards = productData.map((product, index) => <div className="product" key={index}>
        <h4>{product.title}</h4>
        <img src={product.image}></img>
        <p>Price: ${product.price}</p>
        <div className="cartCount">
            <button type="button">-</button>
            <input type="number" value={0}></input>
            <button type="button">+</button>
        </div>
    </div>);

    return (<div id="shop">
        <h1>Shop Page</h1>
        <div id="cards">{productCards}</div>
        <footer><p>Product info and images from <a href="https://fakestoreapi.com/" target="_blank" rel="noopener noreferrer">Fake Store API</a></p></footer>
    </ div>);
}