'use client'

import React from "react";
import { TestimonialBlock as TestimonialBlockProps } from "@/payload-types";
import { Star } from "lucide-react";

const TestimonialBlock: React.FC<TestimonialBlockProps> = ({
  heading,
  description,
  testimonials,
}) => {
  const renderStars = (rating: number) => {
    // Validate the rating
    if (typeof rating !== "number" || isNaN(rating) || rating < 0 || rating > 5) {
      return null;
    }

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center mb-2">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="text-yellow-500" size={20} fill="currentColor" />
        ))}
        {hasHalfStar && (
          <Star
            key="half"
            className="text-yellow-500"
            size={20}
            fill="currentColor"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="text-gray-300" size={20} />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {heading}
            </h2>
          )}
          {description && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              {renderStars(testimonial.rating)}
              <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
              <h3 className="text-lg font-semibold text-gray-900">{testimonial.authorName}</h3>
              {testimonial.authorTitle && (
                <p className="text-gray-500">{testimonial.authorTitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialBlock;
