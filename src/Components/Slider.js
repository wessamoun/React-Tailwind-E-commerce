import image1 from "../assets/images/gifts-5934895_1280.jpg";
import image2 from "../assets/images/pexels-karolina-grabowska-5625069.jpg";
import image3 from "../assets/images/pexels-karolina-grabowska-5625070.jpg";
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
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      className="container"
    >
      <SwiperSlide ><img src="https://placehold.co/1000x600?text=Offers" className="w-full "/></SwiperSlide>
      <SwiperSlide ><img src="https://placehold.co/1000x600?text=50%Dicounts" className="w-full "/></SwiperSlide>
      <SwiperSlide ><img src="https://placehold.co/1000x600?text=Black Friday" className="w-full "/></SwiperSlide>
      
    </Swiper>
  );
}

export default Slider;
