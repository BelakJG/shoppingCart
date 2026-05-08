export default function ProductButtons({currentCart, updateCart, index}) {
    const handleCartChange = (index, event) => {
        const newValue = event.currentTarget.value;
        updateCart(currentCart => ({...currentCart, [index]: newValue}));
    }
    const decCart = (index) => {
        if (currentCart[index] > 0){
            const newValue = +currentCart[index] - 1;
            updateCart(currentCart => ({...currentCart, [index]: newValue}));
        }
    }
    const incCart = (index) => {
        const newValue = (+currentCart[index] || 0) + 1;
        updateCart(currentCart => ({...currentCart, [index]: newValue}));
    }

    return(<div className="cartCount">
        <button type="button" id="decreaseBtn" onClick={() => decCart(index)}>-</button>
        <input type="number" value={currentCart[index] || 0} onChange={(event) => handleCartChange(index, event)}></input>
        <button type="button" id="increaseBtn" onClick={() => incCart(index)}>+</button>
    </div>);
}