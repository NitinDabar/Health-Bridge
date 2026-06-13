import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/styles/Testimonial.css";
import avatar from "../images/avatar.svg";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Helen Carter",
      image: avatar,
      rating: 88,
      text: "I booked an appointment with a neurologist within minutes. The consultation was thorough, and the prescription was sent directly to my dashboard. Incredible experience!"
    },
    {
      id: 2,
      name: "Emily Thompson",
      image: avatar,
      rating: 100,
      text: "We needed blood urgently for my sister's surgery. Through the blood donor search, we found a match and contacted the donor immediately. This platform saved a life."
    },
    {
      id: 3,
      name: "Oliver Davis",
      image: avatar,
      rating: 88,
      text: "Ordering medicines online has never been easier. The prices are competitive, and the delivery was prompt. Highly recommend their pharmacy service!"
    },
    {
      id: 4,
      name: "Thomas Miller",
      image: avatar,
      rating: 100,
      text: "The secure chat feature allowed me to follow up with my doctor from home. Extremely convenient and saved me a long trip to the hospital."
    },
    {
      id: 5,
      name: "Arthur Jenkins",
      image: avatar,
      rating: 88,
      text: "The doctor profiles are highly detailed with chamber locations and maps. It made it so easy to find a specialist in my area."
    },
    {
      id: 6,
      name: "Sophia Roberts",
      image: avatar,
      rating: 88,
      text: "I've been using HealthBridge for all my family's medical appointments and prescriptions. The clean layout and easy navigation make it extremely user-friendly."
    },
    {
      id: 7,
      name: "Charlotte Evans",
      image: avatar,
      rating: 70,
      text: "Great service! Responsive interface, and the verification of blood requests and doctor availability is very reassuring."
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1080 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1366, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 360 },
      items: 1,
    },
  };

  return (
    <div className="testimonial">
      <h1 className="text-center pb-3">Testimonial</h1>
      <div className="d-flex justify-content-center">
        <div className="col-md-8">
          <Carousel
            showDots={true}
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card">
                <div className="col text-center">
                  <div className="card-body mx-3">
                    <div className="mb-4">
                      <img
                        src={testimonial.image}
                        className="rounded-circle shadow-1-strong"
                        width={90}
                        height={90}
                        alt={testimonial.name}
                      />
                    </div>
                    <h5 className="font-weight-bold">{testimonial.name}</h5>
                    <div className="score">
                      <span style={{ width: `${testimonial.rating}%` }}></span>
                    </div>
                    <p className="mb-2">
                      <i className="fas fa-quote-left pe-2" />
                      {testimonial.text}
                      <i className="fas fa-quote-right pe-2" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
