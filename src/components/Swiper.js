import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


<Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide className="p-1 border-4 border-black">
            <div className="items-center flex flex-col space-y-2">
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
          <SwiperSlide className="p-1 border-4 border-black">
            <div className="items-center flex flex-col space-y-2">
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
        </Swiper>