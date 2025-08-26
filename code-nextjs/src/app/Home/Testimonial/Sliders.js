"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

export default function Sliders() {
  const [testimonialSliders, settestimonialSliders] = useState([
    {
      id: "slider1",
      name: "Sarah M.",
      designation: "Parent",
      image: "/images/testimonial/testi-1.jpg",
      description:
        "\"My daughter's grades in Algebra went from a C to an A in just one semester. The tutors not only explained the concepts clearly but also gave her the confidence she was missing in math. I can't thank them enough!\""
    },
    {
      id: "slider2",
      name: "Jason L.",
      designation: "High School Junior",
      image: "/images/testimonial/testi-2.jpg",
      description:
        "\"As a student preparing for the SAT, I was overwhelmed. The personalized practice and strategies I learned here helped me raise my score by 180 points. Now I feel fully ready for college applications!\""
    },
    {
      id: "slider3",
      name: "Priya K.",
      designation: "10th Grade",
      image: "/images/testimonial/testi-3.jpg",
      description:
        "\"What I love most is how patient and approachable the tutors are. They never make you feel bad for not understanding something right away. Learning here feels motivating and stress-free.\""
    },
    {
      id: "slider4",
      name: "Daniel R.",
      designation: "College Freshman",
      image: "/images/testimonial/testi-1.jpg",
      description:
        "\"The tutors didn't just help me with homework—they taught me how to actually study and manage my time better. Those skills carried over into all my classes. Best decision I made this year!\""
    },
    {
      id: "slider5",
      name: "Mark T.",
      designation: "Parent",
      image: "/images/testimonial/testi-2.jpg",
      description:
        "\"We tried a few other tutoring services before, but none compared to this one. The tutors here genuinely care about their students' progress, and it shows in the results. Highly recommend to any parent!\""
    },
  ]);

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 4000 }}
        modules={[Autoplay, Pagination]}
        className="testimnial-slider"
      >
        {testimonialSliders.map((singleSlider) => (
          <SwiperSlide className="testimonial-item" key={singleSlider.id}>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12 d-flex align-items-center">
                <div className="testimnial-left">
                  <div className="testimonial-bottom text-center">
                    <h6>{singleSlider.name}</h6>
                    <p>{singleSlider.designation}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-12">
                <div className="testimonial-right">
                  <p>{singleSlider.description}</p>
                  <div className="stars">
                    <ul>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
