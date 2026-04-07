import React from 'react'
import TestimonialCard from './TestimonialCard.jsx'

const Testimonials = () => {
  const testimonials = [
    {
      testimonial: "I have been using this product for over a year, and it has exceeded my expectations. Highly recommend!",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      testimonial: "The customer support team is outstanding. They went above and beyond to resolve my issue quickly.",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      testimonial: "This product has transformed my business. It’s worth every penny invested.",
      imageUrl: "https://randomuser.me/api/portraits/women/78.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial.testimonial} imageUrl={testimonial.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;