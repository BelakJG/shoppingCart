import { useState, useEffect } from "react";

export const useProductInfo = () => {
    const [err, setErr] = useState(null);
    const [loading, setLoading] = useState(true);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products?limit=20");
                if (!response.ok) {
                    throw new Error(`HTTP Error, status: ${response.status}`);
                }

                const data = await response.json();
                setProductData(data);
            } catch (err) {
                setError(`useProductInfo Error: ${err.message}`);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return {productData, err, loading};
};