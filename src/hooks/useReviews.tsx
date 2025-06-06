import { useState, useEffect } from 'react';

export interface UserReview {
  id: string;
  name: string;
  country: string;
  rating: number;
  comment: string;
  date: string;
}

export const useReviews = () => {
  const [userReviews, setUserReviews] = useState<UserReview[]>([]);

  useEffect(() => {
    const savedReviews = localStorage.getItem('userReviews');
    if (savedReviews) {
      setUserReviews(JSON.parse(savedReviews));
    }
  }, []);

  const addReview = (review: Omit<UserReview, 'id' | 'date'>) => {
    const newReview: UserReview = {
      ...review,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };

    const updatedReviews = [newReview, ...userReviews];
    setUserReviews(updatedReviews);
    localStorage.setItem('userReviews', JSON.stringify(updatedReviews));
  };

  return {
    userReviews,
    addReview,
  };
};
