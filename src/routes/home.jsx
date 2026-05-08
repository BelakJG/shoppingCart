import RandomProduct from "../components/randomProduct";
import "../styles/home.css"

export default function Home({ productData, error, loading }) {
    if (loading) {
        return(<h1>Everything you need!</h1>);
    }
    if (error) {
        throw error;
    }

    return(
        <div id="home">
            <h1>Everything you need!</h1>
            <div className="randomItem">
                <h3>Item of the day</h3>
                <RandomProduct productData={productData} loading={loading}/>
            </div>
        </div>
    );
}