import React, { useState } from 'react';
import { LuBeef } from "react-icons/lu";
import { FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Order from './Order';

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    const showOrders = () => {
        return (
            <div>
                {props.orders.map(el => (
                    <Order onDelete={props.onDelete} key={el.id} item={el} />
                ))}
            </div>
        );
    };

    const showNothing = () => {
        return <div>ВЫБЕРИ СНАЧАЛА</div>;
    };

    return (
        <header>
            <div>
                <span className='logo'>
                    <Link to="/">Tutor Food</Link>
                </span>
                <ul className='nav'>
                    <li><Link to="/reviews" className="nav-link">Отзывы</Link></li>
                    <li><Link to="/contact" className="nav-link">Контакты</Link></li>
                    <li><Link to="/location" className="nav-link">Расположение</Link></li>
                    <li><Link to="/profile" className="nav-link">Профиль</Link></li>
                    {props.user ? (
                        <li><button className="logout-button" onClick={props.logout}>Выйти</button></li>
                    ) : (
                        <li><Link to="/profile"><button className="login-button">Войти</button></Link></li>
                    )}
                </ul>
                <LuBeef className='shop-cart-button1' />
                <FaShopify onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen ? 'active' : ''}`} />
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? showOrders() : showNothing()}
                    </div>
                )}
            </div>
            <div className='banner'></div>
        </header>
    );
}
