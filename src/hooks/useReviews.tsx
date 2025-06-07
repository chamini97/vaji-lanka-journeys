import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient'; // Make sure this path is correct

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

  // Fetch reviews from Supabase when component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching reviews:', error.message);
        return;
      }

      const formatted = data.map((review: any) => ({
        id: review.id,
        name: review.name,
        country: review.country,
        rating: review.rating,
        comment: review.comment,
        date: review.created_at,
      }));

      setUserReviews(formatted);
    };

    fetchReviews();
  }, []);

  // Add review to Supabase
  const addReview = async (review: Omit<UserReview, 'id' | 'date'>) => {
    const { data, error } = await supabase
      .from('reviews')
      .insert([review])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    const newReview: UserReview = {
      id: data.id,
      name: data.name,
      country: data.country,
      rating: data.rating,
      comment: data.comment,
      date: data.created_at,
    };

    setUserReviews((prev) => [newReview, ...prev]);
  };

  return {
    userReviews,
    addReview,
  };
};
