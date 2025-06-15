import TestimonialCard from './TestimonialCard';
import { Button } from '@/components/ui/button';
import { Star, Plus } from 'lucide-react';
import { useReviews } from '@/hooks/useReviews';

interface TestimonialsSectionProps {
  testimonials: Array<{
    name: string;
    country: string;
    rating: number;
    comment: string;
  }>;
  onOpenReviewModal: () => void;
}

const TestimonialsSection = ({ testimonials, onOpenReviewModal }: TestimonialsSectionProps) => {
  const { userReviews } = useReviews();
  
  // Combine existing testimonials with user reviews
  const allTestimonials = [...userReviews, ...testimonials];

  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h3>
          <Button 
            onClick={onOpenReviewModal}
            className="bg-emerald-600 hover:bg-emerald-700 text-white mt-4"
          >
            <Plus className="h-4 w-4 mr-2" />
            Write a Review
          </Button>
        </div>

        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex space-x-6 sm:space-x-8">
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
