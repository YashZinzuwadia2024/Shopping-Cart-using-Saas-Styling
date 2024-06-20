import { createContext, useContext, useState } from "react";

const Cart = createContext();

const Context = ({ children }) => {
    const [cart, setCart] = useState([]);

    const productsArray = [
        {
            id: 1,
            name: 'Product 1',
            price: 19.99,
            image: 'https://source.unsplash.com/random/300x200/?product'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 29.99,
            image: 'https://source.unsplash.com/random/300x200/?product'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 14.99,
            image: 'https://source.unsplash.com/random/300x200/?product'
        },
        {
            id: 4,
            name: 'Product 4',
            price: 24.99,
            image: 'https://source.unsplash.com/random/300x200/?product'
        },
        {
            id: 5,
            name: 'Product 5',
            price: 39.99,
            image: 'https://source.unsplash.com/random/300x200/?product'
        },
        {
            id: 6,
            name: 'Product 6',
            price: 9.99,
            image: 'https://source.unsplash.com/random/300x200/?product'
        },
        {
            id: 7,
            name: 'Product 7',
            price: 49.99,
            image: 'https://source.unsplash.com/random/300x200/?product'
        },
        {
            id: 8,
            name: 'Product 8',
            price: 34.99,
            image: 'https://source.unsplash.com/random/300x200/?product'
        },
        {
            id: 9,
            name: 'Product 9',
            price: 22.99,
            image: 'https://source.unsplash.com/random/300x200/?product'
        },
        {
            id: 10,
            name: 'Product 10',
            price: 17.99,
            image: 'https://source.unsplash.com/random/300x200/?product'
        }
    ];

    const [products] = useState(productsArray);

    return (
        <Cart.Provider value={{ cart, setCart, products }}>
            {children}
        </Cart.Provider>
    );
};

export const CartState = () => {
    return useContext(Cart);
};

export default Context;