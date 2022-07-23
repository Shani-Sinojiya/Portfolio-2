import "./Testimonials.css";
import Image1 from "../../assets/avatar-1.svg";
import Image3 from "../../assets/avatar-3.svg";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: Image1,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
    {
      id: 2,
      image: Image3,
      title: "John Doe",
      subtitle: "Product designer at Dribble",
      comment:
        "I enjoy working with the theme and learn so much. You       guys make the process fun and interesting. Good luck! 👍",
    },
  ];
  return (
    <section className="testimonials section container">
      <h2 className="section_title">Clients & Reviews</h2>

      <Swiper
        className="testimonials_container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map((val) => (
          <SwiperSlide className="testimonial_item" key={val.id}>
            <div className="thumb">
              <img src={val.image} alt={val.subtitle} />
            </div>
            <h3 className="testimonials_title">{val.title}</h3>
            <span className="testimonials_subtitle">{val.subtitle}</span>
            <div className="testimonials_comment">{val.comment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
