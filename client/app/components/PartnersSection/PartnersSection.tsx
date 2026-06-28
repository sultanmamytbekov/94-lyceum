"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import partner1 from "./images/partner1.png";
import partner2 from "./images/partner2.png";
import partner3 from "./images/partner3.png";
import partner4 from "./images/partner4.png";
import partner5 from "./images/partner5.png";
import partner6 from "./images/partner6.png";
import partner7 from "./images/partner7.png";
import partner8 from "./images/partner8.png";
import partner9 from "./images/partner9.png";
import partner10 from "./images/partner10.png";
import partner11 from "./images/partner11.png";
import partner12 from "./images/partner12.png";
import partner13 from "./images/partner13.png";
import partner14 from "./images/partner14.png";
import partner15 from "./images/brs.jpeg";


import { useTranslations } from "next-intl";
export default function PartnersSection() {
  const t = useTranslations("partners");
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
    {
      image: partner5,
      alt: "partner",
    },
    {
      image: partner6,
      alt: "partner",
    },
    {
      image: partner7,
      alt: "partner",
    },
    {
      image: partner8,
      alt: "partner",
    },
    {
      image: partner9,
      alt: "partner",
    },
    {
      image: partner10,
      alt: "partner",
    },
    {
      image: partner11,
      alt: "partner",
    },
    {
      image: partner12,
      alt: "partner",
    },
    {
      image: partner13,
      alt: "partner",
    },
    {
      image: partner14,
      alt: "partner",
    },{
      image: partner15,
      alt: "partner",
    }
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
          {t("title")}
        </h2>
        <Swiper
          modules={[Autoplay]}
          loop
          grabCursor
          spaceBetween={28}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 1.6,
              spaceBetween: 18,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 22,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 28,
            },
          }}
        >
          {partners.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="
          group
          bg-[#ECECEC]
          rounded-[34px]
          border
          border-[#d7d7d7]
          shadow-[0_6px_25px_rgba(0,0,0,0.06),0_22px_55px_rgba(0,0,0,0.10)]
          h-[190px]
          sm:h-[220px]
          lg:h-[260px]
          flex
          items-center
          justify-center
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_30px_rgba(0,0,0,0.12),0_28px_60px_rgba(0,0,0,0.12)]
        "
              >
                <div
                  className="
            relative
            w-[145px]
            h-[145px]
            sm:w-[170px]
            sm:h-[170px]
            lg:w-[210px]
            lg:h-[210px]
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}