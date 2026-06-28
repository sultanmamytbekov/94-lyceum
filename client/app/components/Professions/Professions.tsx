"use client";

import Image from "next/image";
import bgImage from "./images/bg.png";
import Link from "next/link";
import { professions } from "@/app/data/professions";
import { useTranslations, useLocale } from "next-intl";

export default function ProfessionSection() {
  const t = useTranslations("professions");
  const locale = useLocale();
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        py-[120px]
        bg-[#021054]
      "
    >
      {/* фон */}
      <div>
        <Image
          src={bgImage}
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* верхнее размытие */}
      <div
        className="
          absolute
          top-[-180px]
          left-1/2
          -translate-x-1/2
          w-[140%]
          h-[340px]
          rounded-full
          bg-[#355DFF]
          opacity-40
          blur-[170px]
          z-0
        "
      />

      {/* нижнее размытие */}
      <div
        className="
          absolute
          bottom-[-180px]
          left-1/2
          -translate-x-1/2
          w-[140%]
          h-[340px]
          rounded-full
          bg-[#355DFF]
          opacity-40
          blur-[170px]
          z-0
        "
      />

      <div className="relative z-10 max-w-[1450px] mx-auto px-4">
        {/* title */}
        <h2
          className="
            text-white
            text-[36px]
            leading-[100%]
            text-center
            font-normal
            mb-[90px]
          "
          style={{
            fontFamily: "sans-serif",
          }}
        >
          {t("sectionTitle")}
        </h2>

        {/* cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-y-[80px]
            gap-x-[55px]
            justify-items-center
          "
        >
          {professions.map((item, index) => (
            <Link
              href={`/${locale}/professions/${item.id}`}
              key={index}
              className="
              relative
              w-[355px]
              h-[441px]
              flex
              items-center
              justify-center"
            >
              {/* задний прозрачный блок */}
              <div
                className="
                  absolute
                  w-[521px]
                  h-[521px]
                  rounded-[59px]
                  bg-white/15
                  blur-[38.8px]
                  opacity-15
                  z-0
                "
              />
              {/* основной блок */}
              <div />
              {/* основной блок */}
              <div
                className="
                  relative
                  z-10
                  w-[355px]
                  h-[441px]
                  rounded-[59px]
                  bg-[rgba(255,255,255,0.10)]
                  shadow-[0px_4px_53    px_rgba(0,0,0,0.25)]
                  backdrop-blur-[15.7px]
                  border
                  border-white/10
                  flex
                  flex-col
                  items-center
                  pt-[26px]
                "
              >
                {/* фиксированный блок текста */}
                <div className="h-[90px] flex items-center justify-center">
                  <h3
                    className="
                      text-white
                      text-[30px]
                      leading-[100%]
                      text-center
                      whitespace-pre-line
                    "
                    style={{
                      fontFamily: "sans-serif",
                      WebkitTextStroke: "4px rgba(0,0,0,0.35)",
                      paintOrder: "stroke fill",
                    }}
                  >
                    {(item.titleBlock.title)}
                  </h3>
                </div>

                {/* фото */}
                <div
                  className="
                    relative
                    w-[325px]
                    h-[325px]
                    rounded-[59px]
                    overflow-hidden
                    mt-[10px]
                    shrink-0
                  "
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover w-[281px] h-[300px]"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}