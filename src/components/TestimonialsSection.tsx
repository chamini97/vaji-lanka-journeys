import React, { useState, useEffect } from "react";
import TestimonialCard from "./TestimonialCard"; // your existing component

interface Testimonial {
  name: string;
  country: string;
  rating: number;
  comment: string;
}

const TestimonialsSection = () => {
  // Load saved reviews from localStorage or start with defaults
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem("testimonials");
    if (saved) return JSON.parse(saved);
    return [
      {
        name: "John Smith",
        country: "USA",
        rating: 5,
        comment: "The van we rented was perfect for our family trip. Spacious and clean!"
      },
      // ...other default testimonials here
    ];
  });

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    rating: 5,
    comment: ""
  });

  // Save testimonials to localStorage on change
  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.country || !formData.comment) {
      alert("Please fill in all fields.");
      return;
    }

    const newReview: Testimonial = {
      name: formData.name,
      country: formData.country,
      rating: Number(formData.rating),
      comment: formData.comment
    };

    setTestimonials([newReview, ...testimonials]);
    setFormData({ name: "", country: "", rating: 5, comment: "" });
  };

  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="container mx-auto">
        <h3 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">Customer Reviews</h3>

        {/* Scrollable testimonials */}
        <div className="flex overflow-x-auto gap-6 pb-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex-shrink-0 w-80">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Review submission form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-8 bg-white p-6 rounded shadow">
          <h4 className="text-xl font-semibold mb-4">Add your review</h4>

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <input
            type="text"
            name="country"
            placeholder="Your country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <select
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            className="w-full mb-3 p-2 border rounded"
          >
            {[5, 4, 3, 2, 1].map(r => (
              <option key={r} value={r}>{r} Star{r > 1 ? "s" : ""}</option>
            ))}
          </select>

          <textarea
            name="comment"
            placeholder="Write your review here..."
            value={formData.comment}
            onChange={handleInputChange}
            rows={4}
            className="w-full mb-3 p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default TestimonialsSection;
