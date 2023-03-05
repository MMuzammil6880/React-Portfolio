import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "We were impressed with the attention to detail and level of professionalism in the frontend development work provided by the team. They were able to deliver a visually stunning and highly functional website.",
    },
    {
      img: profilePic2,
      review:
        "The team's ability to create responsive and mobile-friendly designs was a game changer for our business. Our website now looks great on any device, and we've seen a significant increase in user engagement",
    },
    {
      img: profilePic3,
      review:
        "The team's frontend web development work was exceptional, they truly brought our vision to life with their expertise in HTML, CSS, and JavaScript.",
    },
    {
      img: profilePic4,
      review:
        "The frontend web development work delivered by the team exceeded our expectations. They were able to create a seamless user experience, and their use of modern design trends and techniques really set our website apart from the competition.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span> <br />
        <span>Exceptional Work from me... </span>
        
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
