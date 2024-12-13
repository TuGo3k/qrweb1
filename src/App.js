// Import React and Swiper components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./App.css";

function App() {
  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col text-center p-6">
        <h1 className="text-[30px] font-bold">WP-Food</h1>
        <p className="text-slate-700">Restaurant Menu & Food Ordering</p>
      </div>

      <div className="gap-5 flex flex-col p-6">
        <h1 className="text-[30px]">Carousel Style 1</h1>
        <p>Carousel style 1 with 3 items visible, autoplay, and infinite loop.</p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation={true} // Enable navigation arrows
          className="custom-swiper"
        >
          <SwiperSlide className="1 p-1 border-black">
            <div className="items-center flex flex-col space-y-2">
              
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg1.jpg"
                alt="Food"
              />
              <h1 className="text-[22px] flex justify-center">
                ШАРСАН ТАХИА + УНДАА
              </h1>
              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="6 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
            <div className="w-[150px] absolute top-5 -left-10 -rotate-45 bg-red-600 font-semibold text-white flex justify-center overflow-hidden">
                ХЯМДРАЛ
              </div>
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg6.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                ШАРСАН ТАХИА 6ХҮН
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600"><span className="line-through text-slate-500">50'000₮</span> - 40'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="2 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg2.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
              ШАРСАН ТАХИА + УНДАА
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
                ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="3 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg3.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                FRIED CHICKEN (1PC) + DRINK
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="4 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
            <div className="w-[150px] absolute top-5 -left-10 -rotate-45 bg-red-600 font-semibold text-white flex justify-center overflow-hidden">
                ХЯМДРАЛ
              </div>
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg4.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                PEPPERONI PIZZA
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮ - 30'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="5 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg5.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                ШАРСАН ТАХИА 1ХҮН
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          

          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
      <div className="gap-5 flex flex-col p-6">
        <h1 className="text-[30px]">Carousel Style 1</h1>
        <p>Carousel style 1 with 3 items visible, autoplay, and infinite loop.</p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          // loop={true}
          navigation={true} // Enable navigation arrows
          className="custom-swiper"
        >
          <SwiperSlide className="1 p-1 border-black">
            <div className="items-center flex flex-col space-y-2">
              
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg1.jpg"
                alt="Food"
              />
              <h1 className="text-[22px] flex justify-center">
                ШАРСАН ТАХИА + УНДАА
              </h1>
              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="6 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
            <div className="w-[150px] absolute top-5 -left-10 -rotate-45 bg-red-600 font-semibold text-white flex justify-center overflow-hidden">
                ХЯМДРАЛ
              </div>
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg6.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                ШАРСАН ТАХИА 6ХҮН
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600"><span className="line-through text-slate-500">50'000₮</span> - 40'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="2 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg2.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
              ШАРСАН ТАХИА + УНДАА
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
                ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="3 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg3.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                FRIED CHICKEN (1PC) + DRINK
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="4 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
            <div className="w-[150px] absolute top-5 -left-10 -rotate-45 bg-red-600 font-semibold text-white flex justify-center overflow-hidden">
                ХЯМДРАЛ
              </div>
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg4.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                PEPPERONI PIZZA
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮ - 30'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="5 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg5.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                ШАРСАН ТАХИА 1ХҮН
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          

          {/* Add more SwiperSlides as needed */}
        </Swiper>
      </div>
      <div className="gap-5 flex flex-col p-6">
        <h1 className="text-[30px]">Carousel Style 1</h1>
        <p>Carousel style 1 with 3 items visible, autoplay, and infinite loop.</p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          // loop={true}
          navigation={true} // Enable navigation arrows
          className="custom-swiper"
        >
          <SwiperSlide className="1 p-1 border-black">
            <div className="items-center flex flex-col space-y-2">
              
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg1.jpg"
                alt="Food"
              />
              <h1 className="text-[22px] flex justify-center">
                ШАРСАН ТАХИА + УНДАА
              </h1>
              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="6 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
            <div className="w-[150px] absolute top-5 -left-10 -rotate-45 bg-red-600 font-semibold text-white flex justify-center overflow-hidden">
                ХЯМДРАЛ
              </div>
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg6.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                ШАРСАН ТАХИА 6ХҮН
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600"><span className="line-through text-slate-500">50'000₮</span> - 40'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          
          <SwiperSlide className="2 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg2.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
              ШАРСАН ТАХИА + УНДАА
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
                ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="3 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg3.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                FRIED CHICKEN (1PC) + DRINK
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="4 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
            <div className="w-[150px] absolute top-5 -left-10 -rotate-45 bg-red-600 font-semibold text-white flex justify-center overflow-hidden">
                ХЯМДРАЛ
              </div>
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg4.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                PEPPERONI PIZZA
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮ - 30'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="5 p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg5.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                ШАРСАН ТАХИА 1ХҮН
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">20'000₮</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
              ЗАХИАЛАХ
              </span>
            </div>
          </SwiperSlide>
          

          {/* Add more SwiperSlides as needed */}
        </Swiper>
        
      </div>
      <div className="flex justify-center p-4 bg-[#222222] text-white">© 2024 WP-Food</div>
    </div>
  );
}

export default App;
