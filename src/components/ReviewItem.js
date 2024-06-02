import React from 'react';
import '../styles/ReviewsPage.css';

const ReviewItem = ({ review }) => {
  return (
    <div className="review-item">
      <img src={review.image} alt="Review" className="review-image" />
      <p className="review-text">{review.text}</p>
      <img src={review.avatar} alt="Avatar" className="review-avatar" />
      <p className="review-author">{review.author}</p>
    </div>
  );
};

export default ReviewItem;
