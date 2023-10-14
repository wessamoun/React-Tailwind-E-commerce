import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className="container"
    >
      <SwiperSlide ><img src="https://placehold.co/1000x600?text=Offers" alt="img1" className="w-full "/></SwiperSlide>
      <SwiperSlide ><img src="https://placehold.co/1000x600?text=50%Dicounts" alt="img2" className="w-full "/></SwiperSlide>
      <SwiperSlide ><img src="https://placehold.co/1000x600?text=Black Friday" alt="img3" className="w-full "/></SwiperSlide>
      
    </Swiper>
  );
}

export default Slider;
