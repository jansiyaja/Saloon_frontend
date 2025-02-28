

const testimonials = [
  {
    quote: 'The best salon experience I have ever had. My hair has never looked better!',
    author: 'Jane Doe',
    image: 'https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-28+at+10.46.00_df07b328.jpg'
  },
  {
    quote: 'Absolutely amazing! The staff is friendly and the service is top-notch.',
    author: 'John Smith',
    image: 'https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-28+at+10.45.51_ef733992.jpg'
  },
  {
    quote: 'I love the ambiance and the professionalism. Highly recommended!',
    author: 'Emily Johnson',
    image: 'https://saloonsite.s3.eu-north-1.amazonaws.com/WhatsApp+Image+2025-02-28+at+10.51.38_6dfea8e8.jpg',
  }
];

const TestimonialSection = () => {
  return (
    <section className="bg-black text-amber-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded border shadow-lg hover:shadow-amber-300 transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"             
                                  />
                <div className="font-semibold text-white">{testimonial.author}</div>
              </div>
              <p className="italic text-white ">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
