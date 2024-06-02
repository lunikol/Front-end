import React from 'react';

function Reviews() {
    return (
        <div className="reviews-page">
            <h1>Отзывы</h1>
            <div className="review">
                <h3>Иван Иванов</h3>
                <p>Отличное обслуживание и вкусная еда! Очень доволен!</p>
            </div>
            <div className="review">
                <h3>Мария Петрова</h3>
                <p>Очень вкусная паста Карбонара. Рекомендую всем!</p>
            </div>
            <div className="review">
                <h3>Алексей Сидоров</h3>
                <p>Прекрасное место для семейного ужина. Еда на высшем уровне!</p>
            </div>
        </div>
    );
}

export default Reviews;
