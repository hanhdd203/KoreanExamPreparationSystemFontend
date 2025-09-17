import React from "react";

const testimonials = [
  {
    id: 1,
    img: "img/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    id: 2,
    img: "img/testimonial-2.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    id: 3,
    img: "img/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
  {
    id: 4,
    img: "img/testimonial-4.jpg",
    name: "Client Name",
    profession: "Profession",
    text: "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.",
  },
];

const TestimonialComponent = () => {
  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Students Say!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel position-relative">
          {testimonials.map(({ id, img, name, profession, text }) => (
            <div key={id} className="testimonial-item text-center">
              <img
                className="border rounded-circle p-2 mx-auto mb-3"
                src={img}
                alt={name}
                style={{ width: "80px", height: "80px" }}
              />
              <h5 className="mb-0">{name}</h5>
              <p>{profession}</p>
              <div className="testimonial-text bg-light text-center p-4">
                <p className="mb-0">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
