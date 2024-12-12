// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./App.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function App() {
  return (
    <div>
      <div className="w-full h-full bg-white">
        <div className="flex flex-col text-center p-6">
          <h1 className="text-[30px] font-bold">WP-Food</h1>
          <p className="text-slate-700">Restaurant Menu & Food Ordering</p>
        </div>
        <div className="gap-5 flex flex-col p-6">
          <h1 className="text-[30px]">Carousel Style 1</h1>
          <p>
            Carousel style 1 with 3 items visible, autoplay, and infinite loop.
          </p>
        </div>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          // loop={true}
          className="custom-swiper"
        >
          <SwiperSlide className="p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <div className="w-[150px]   absolute top-5 -left-10  -rotate-45 bg-red-600 font-semibold text-white flex justify-center overflow-hidden">
                sale
              </div>
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg1.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                FRIED CHICKEN (1PC) + DRINK
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">$20</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
                ORDER
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg2.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                FRIED CHICKEN (1PC) + DRINK
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">$20</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
                ORDER
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-1  border-black">
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
                  <p className="text-[22px] font-bold text-red-600">$20</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
                ORDER
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg4.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                FRIED CHICKEN (1PC) + DRINK
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">$20</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
                ORDER
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg5.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                FRIED CHICKEN (1PC) + DRINK
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">$20</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
                ORDER
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="p-1  border-black">
            <div className="items-center flex flex-col space-y-2">
              <img
                className="size-[412px] bg-cover w-full h-full"
                src="/foodimg6.jpg"
                alt="Food"
              />

              <h1 className="text-[22px] flex justify-center">
                FRIED CHICKEN (1PC) + DRINK
              </h1>

              <div className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-5">
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                  <p className="text-[22px] font-bold text-red-600">$20</p>
                  <div className="w-[80px] h-[2px] bg-slate-300"></div>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <span className="bg-red-600 inline-flex px-6 py-1 justify-center font-semibold text-white">
                ORDER
              </span>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>
  );
}

export default App;
