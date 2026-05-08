import { useState, useEffect } from "react";

export default function RandomProduct({productData, loading}) {
    if (loading || productData.length === 0) return (<></>);

    const [secondsLeft, setSecondsleft] = useState(6 * 60 * 60);
    const [index] = useState(() => Math.floor(Math.random() * 20))

    useEffect(() => {
        const key = setInterval(() => {
            setSecondsleft(secondsLeft => secondsLeft - 1);
        }, 1000);

        return () => {
            clearInterval(key);
        }
    }, []);

    function GetTimeLeftString() {
        const hours = Math.floor(secondsLeft / 3600);
        const minutes = Math.floor(secondsLeft / 60) % 60;
        const seconds = secondsLeft % 60;

        const hh = String(hours).padStart(2, "0");
        const mm = String(minutes).padStart(2, "0");
        const ss = String(seconds).padStart(2, "0");

        return secondsLeft >= 0 ? <h2>{`Sale in: ${hh}:${mm}:${ss}`}</h2> : "";
    }

    return(<>
        <h1>{productData[index].title}</h1>
        <img src={productData[index].image}></img>
        <GetTimeLeftString />
    </>);
}