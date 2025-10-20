
// CustomerReviewsSlider.jsx

// Import Swiper React components
import img1 from '../assets/slider1.png';
import img2 from '../assets/slider2.png';
import img3 from '../assets/slider3.png';
import img4 from '../assets/slider4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// Import required modules
import { Autoplay } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import ReviewCards from './ReviewCards.jsx';

const Testimonial = [
  { id: 1, src: img1, name: "Mark T.", title: "Fitness enthusiast", review: `"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”` },
  { id: 2, src: img1, name: "Mark T.", title: "Fitness enthusiast", review: `"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”` },
  { id: 3, src: img2, name: "Mark T.", title: "Fitness enthusiast", review: `"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”` },
  { id: 4, src: img3, name: "Mark T.", title: "Fitness enthusiast", review: `"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”` },
  { id: 5, src: img4, name: "Mark T.", title: "Fitness enthusiast", review: `"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”` },
  { id: 6, src: img1, name: "Mark T.", title: "Fitness enthusiast", review: `"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”` },
  { id: 7, src: img2, name: "Mark T.", title: "Fitness enthusiast", review: `"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”` },
  { id: 8, src: img3, name: "Mark T.", title: "Fitness enthusiast", review: `"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”` },
  { id: 9, src: img4, name: "Mark T.", title: "Fitness enthusiast", review: `"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”` },
  { id: 10, src: img1, name: "Mark T.", title: "Fitness enthusiast", review: `"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”` },
];

export default function Section3() {
  return (
    <section className="py-20">
      {/* Top Section */}
      <div className="text-center mb-10 px-4 ">

        <h2 className="text-4xl xl:text-[56px] font-semibold mb-4">What Our Customers Say</h2>
        <p className="text-base lg:text-lg  max-w-2xl mx-auto">
          Lorem ipsum koda astrobel. Rodod bånera viliga. Pregigt primasofi dede facebooka förutom tivaligt. Fejkade
        </p>

        <div className=''>
          <ReviewCards/>
        </div>

      </div>

      {/* Swiper Slider Wrapper */}
      <div className="w-full ">
        <Swiper
          // Install modules
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Default for mobile
          centeredSlides={true}
          loop={true} // Infinite loop
          autoplay={{
            delay: 2000, // Time between slides in ms
            disableOnInteraction: false, // Keep auto-playing even when user interacts
          }}
          // Responsive breakpoints for Tailwind
          breakpoints={{
            // when window width is >= 640px (sm)
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false, // Better for multiple slides
            },
            // when window width is >= 1024px (lg)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: false,
            },
            // for the 'showing part of the next slide' effect
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          className="mySwiper py-10" // Add padding for shadow visibility
        >
          {Testimonial.map(review => (
            <SwiperSlide key={review.id} className="h-full py-20">
              <TestimonialCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};




