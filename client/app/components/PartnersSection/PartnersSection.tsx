"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import partner1 from "./images/partner1.png";
import partner2 from "./images/partner2.png";
import partner3 from "./images/partner3.png";
import partner4 from "./images/partner4.png";

export default function PartnersSection() {
  const partners = [
    {
      image: partner1,
      alt: "partner",
    },
    {
      image: partner2,
      alt: "partner",
    },
    {
      image: partner3,
      alt: "partner",
    },
    {
      image: partner4,
      alt: "partner",
    },
  ];

  return (
    <section className="w-full px-3 md:px-4 pb-[40px] md:pb-[70px]">
      {/* main block */}
      <div
        className="
          max-w-[1600px]
          mx-auto
          rounded-[18px]
          md:rounded-[22px]
          bg-[#d9d7d7]
          px-[18px]
          md:px-[40px]
          py-[20px]
          md:py-[30px]
          shadow-[0px_8px_30px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >
        {/* title */}
        <h2
          className="
            text-[#35558E]
            text-[28px]
            md:text-[54px]
            leading-[100%]
            mb-[20px]
            md:mb-[35px]
            drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
          "
          style={{
            fontFamily: "sans-serif",
            fontWeight: 700,
          }}
        >
          Наши партнёры
        </h2>

        {/* desktop */}
        <div className="hidden lg:grid grid-cols-4 gap-[28px]">
          {partners.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-[#ECECEC]
                rounded-[34px]
                border
                border-[#d7d7d7]
                shadow-[0px_8px_24px_rgba(0,0,0,0.10)]
                h-[260px]
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0px_12px_35px_rgba(0,0,0,0.18)]
              "
            >
              <div
                className="
                  relative
                  w-[210px]
                  h-[210px]
                  rounded-[28px]
                  overflow-hidden
                "
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* mobile slider */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.6}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {partners.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    group
                    bg-[#ECECEC]
                    rounded-[26px]
                    border
                    border-[#d7d7d7]
                    shadow-[0px_8px_24px_rgba(0,0,0,0.10)]
                    h-[190px]
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      relative
                      w-[145px]
                      h-[145px]
                      rounded-[22px]
                      overflow-hidden
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}