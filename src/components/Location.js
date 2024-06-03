import React from 'react';

function Location() {
    return (
        <div className="location-page">
            <h1>Расположение</h1>
            <p>Наш ресторан находится по адресу:</p>
            <ul>
                <li>г. Москва, ул. Примерная, д. 1</li>
            </ul>
            <p>Мы работаем ежедневно с 10:00 до 22:00. Ждем вас в нашем уютном ресторане!</p>
            <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.656443474567!2d37.62039371603353!3d55.753960980553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNXTCoDU1JzE0LjMiTiAzN8KwMzcnMTcuNiJF!5e0!3m2!1sen!2sru!4v1614072052878!5m2!1sen!2sru"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}

export default Location;
