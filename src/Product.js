import React from 'react';
import Prod from './Prod';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './cartSlice';

const Product = () => {
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const addCart = (item) => {
        dispatch(addToCart(item));
    };


    const deleteCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div>
            <div className="row">
                {Prod.map((item) => (
                    <div className="col" key={item.id}>
                        <div className="card">
                            <img src={item.img} width={300} height={300} alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.price}</p>

                                {cartProducts.find((i) => i.id === item.id) ? (
                                    <button onClick={() => deleteCart(item.id)}>Remove from Cart</button>
                                ) : (
                                    <button onClick={() => addCart(item)}>Add to Cart</button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
