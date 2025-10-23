import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
    totalAmount: 0,
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find(i => i.id === item.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }


            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        updateQuantity: (state, action) => {
            const { id, change } = action.payload; // +1 or -1
            const item = state.cartItems.find(i => i.id === id);

            if (item) {
                item.quantity += change;

                if (item.quantity < 1) {
                    item.quantity = 1; // prevent going below 1
                }
            }

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        calculateTotal: (state) => {
            state.totalAmount = state.cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
            );
        },
    },
});

export const { addToCart, updateQuantity, removeFromCart, calculateTotal } =
    cartSlice.actions;
export default cartSlice.reducer;