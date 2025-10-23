// CartPage.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeFromCart, calculateTotal } from './cartSlice';

const CartPage = () => {
    const { cartItems, totalAmount } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(calculateTotal());
    }, [cartItems, dispatch]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>🛒 Your Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "20px" }}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px" }}
                                            />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>₹{item.price}</td>
                                        <td>
                                            <button onClick={() => dispatch(updateQuantity({ id: item.id, change: -1 }))}>-</button>
                                            <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                                            <button onClick={() => dispatch(updateQuantity({ id: item.id, change: 1 }))}>+</button>
                                        </td>
                                        {console.log(item.price * item.quantity, "data of price")}
                                        <td>₹{item.price * item.quantity}</td>
                                        <td>
                                            <button onClick={() => dispatch(removeFromCart(item.id))}>❌ Remove</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>


                    <h3>Total Amount: ₹{totalAmount}</h3>
                </>
            )}
        </div>
    );
};

export default CartPage;
