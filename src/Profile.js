import React, { useState } from 'react';

function Profile({ user, orders, login }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Простой вход без проверки
        login({ username });
    };

    return (
        <div className="profile-page">
            {user ? (
                <>
                    <h1>Личный профиль</h1>
                    <p style={{ color: 'black' }}>Привет, {user.username}!</p>
                    <h2 style={{ color: 'black' }}>Мои заказы:</h2>
                    {orders.length > 0 ? (
                        <>
                            <ul style={{ color: 'black' }}>
                                {orders.map(order => (
                                    <li key={order.id}>{order.title} - {order.price}</li>
                                ))}
                            </ul>
                            <button>Оформить заказ</button>
                        </>
                    ) : (
                        <p style={{ color: 'black' }}>У вас нет заказов</p>
                    )}
                </>
            ) : (
                <form onSubmit={handleLogin}>
                    <h1 style={{ color: 'black' }}>Регистрация</h1>
                    <div>
                        <label style={{ color: 'black' }}>Введите ваше имя:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label style={{ color: 'black' }}>Пароль:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Войти</button>
                </form>
            )}
        </div>
    );
}

export default Profile;
