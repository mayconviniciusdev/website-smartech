import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import testimonials from "./testimonialsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export const Testimonials = () => {
  return (
    <section className="max-w-4xl mx-auto text-center">
      <div className="mx-5">
        <h2 className="font-bold text-2xl text-blue">O QUE DIZEM SOBRE A GENTE?</h2>

        <div className="mt-8">
          <Swiper
          slidesPerView={2}
          spaceBetween={20}
          modules={[Autoplay, Pagination, A11y]}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}>
            {testimonials.map((testemony, index) => (
              <SwiperSlide key={index} className="items-center">
                <div className="bg-blue/20 p-10 rounded-2xl">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-6xl text-blue"/>
                  <h2 className="font-bold text-lg text-black-grey py-2">{testemony.name}</h2>
                  <p>{testemony.quote}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination mt-8"></div>
        </div>
      </div>
    </section>
  );
};
