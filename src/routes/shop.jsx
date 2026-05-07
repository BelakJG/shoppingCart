import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/shop.css"

export default function Shop() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=20");
                if (!response.ok) {
                    throw new Error(`HTTP Error, status: ${response.status}`)
                }
                const data = await response.json();
                setItemData(itemData => data);
            } catch (error) {
                setError(`Fetch Error: ${error.message}`)
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return(<h1>Loading!</h1>);
    }
    if (error) {
        throw error;
    }

    const itemCards = itemData.map(product => <div className="product" key={product.id}>
        <h3>{product.title}</h3>
        <img src={product.image}></img>
        <p>Price: ${product.price}</p>
    </div>);

    return (<div id="shop">
        <h1>Shop Page</h1>
        <div id="cards">{itemCards}</div>
        <footer><p>Product info and images from <a href="https://fakestoreapi.com/" target="_blank" rel="noopener noreferrer">Fake Store API</a></p></footer>
    </ div>);
}