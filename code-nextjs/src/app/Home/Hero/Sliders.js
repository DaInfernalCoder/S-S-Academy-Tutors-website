"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Sliders() {
// Hero sliders updated for tutoring content - all links properly connected to navigation 

  const [heroSliders, setheroSliders] = useState([
    {
      id: "slider1",
      title: "Your Trusted Partner in Academic Success",
      subTitle:
        "Unlock your student's full potential with our personalized tutoring services. Schedule a consultation with our expert educators to explore tailored learning solutions for academic excellence.",
      button: {
        text: "Contact Us",
        link: "/#contact",
      },
    },
    {
      id: "slider2",
      title: "Excellence in Education, Personalized for Every Student",
      subTitle:
        "Connect with our team of experienced educators who are ready to help students navigate academic challenges and achieve sustainable learning success from elementary through college prep.",
      button: {
        text: "Contact Us",
        link: "/contact",
      },
    },
    {
      id: "slider3",
      title: "Where Expert Tutoring Meets Measurable Academic Growth",
      subTitle:
        "Discover our proven 5-step tutoring methodology that transforms learning challenges into academic achievements. Learn more about how our structured process drives student success.",
      button: {
        text: "Our Process",
        link: "/process",
      },
    },
  ]);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <section className="hero-area">
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay, Pagination]}
          className="hero-slider"
        >
          {heroSliders.map((singleSlider) => (
            <SwiperSlide
              className="single-slider"
              style={{
                backgroundColor: '#007BA7'
              }}
              key={singleSlider.id}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-12">
                    <div className="hero-content" style={{ color: '#fff' }}>
                      <h1>{singleSlider?.title}</h1>
                      <p>{singleSlider?.subTitle}</p>
                      {/* <!-- Slider Button --> */}
                      <div className="button">
                        <a
                          href={singleSlider?.button.link}
                          className="theme-btn"
                        >
                          {singleSlider?.button.text}
                        </a>
                      </div>
                      {/* <!-- End Slider Button --> */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* <!-- End Hero Area --> */}
    </>
  );
}
