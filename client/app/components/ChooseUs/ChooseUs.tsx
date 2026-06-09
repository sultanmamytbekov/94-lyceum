"use client";

import beg from "./image/mainLogo2.png";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
export default function ChooseUs() {
  const t = useTranslations("chooseUs");
  const locale = useLocale();
  const items = [
    {
      title: t("card1.title"),
      text: t("card1.text"),
    },
    {
      title: t("card2.title"),
      text: t("card2.text"),
    },
    {
      title: t("card3.title"),
      text: t("card3.text"),
    },
    {
      title: t("card4.title"),
      text: t("card4.text"),
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#f5f5f5] py-10 md:py-14"
      style={{
        backgroundImage: `url(${beg.src})`,
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <h2
          className="
            text-center
            text-[#003B8F]
            font-normal
            text-[28px]
            sm:text-[34px]
            md:text-[42px]
            leading-tight
            mb-10
          "

        >
          {t("title")}
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-14">
          {items.map((item, index) => (
            <div key={index} className="relative">
              {/* Divider Line */}
              {index >= 2 && (
                <div className="hidden md:block absolute -top-5 left-1/2 -translate-x-1/2 w-[85%] h-[1px] bg-[#cfcfcf]" />
              )}

              <div
                className="
                  bg-white/95
                  rounded-[32px]
                  shadow-[0_8px_24px_rgba(0,0,0,0.12)]
                  px-6
                  sm:px-8
                  py-7
                  min-h-[180px]
                  flex
                  flex-col
                  justify-start
                "
              >
                <h3
                  className="
                    text-[#003B8F]
                    text-[24px]
                    sm:text-[28px]
                    leading-tight
                    mb-3
                    flex
                    items-start
                    gap-2
                  "

                >
                  <span style={{ color: "black" }}>•</span>
                  <span>{item.title}</span>
                </h3>

                <p
                  className="
                    text-[#4B4B4B]
                    text-[16px]
                    sm:text-[18px]
                    leading-[1.35]
                    whitespace-pre-line
                    pl-5
                  "
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ЧЕРНАЯ ЛИНИЯ */}
        <div className="mb-12 w-full h-[1px] mt-24 bg-black/70" />
        {/* О НАС */}
        <section
          id="about"
          className="scroll-mt-[140px]"
        >
          <div className="mt-20">

            <h2
              className="
              text-[#003878]
              text-[42px]
              sm:text-[54px]
              md:text-[64px]
              leading-none
              mb-8
            "
              style={{
                fontFamily: "sans-serif",
              }}
            >
              {t("aboutTitle")}
            </h2>


            {/* БЛОК ПО СЕРЕДИНЕ */}
            <div className="flex justify-center">
              <div
                className="
                bg-white/95
                rounded-[30px]
                shadow-[0_10px_25px_rgba(0,0,0,0.15)]
                px-6
                sm:px-8
                py-7
                max-w-[850px]
                w-full
              "
              >
                <p
                  className="
                  text-[#2F2F2F]
                  text-[15px]
                  sm:text-[17px]
                  md:text-[20px]
                  leading-[1.6]
                "

                >
                  {t("aboutText")}
                </p>

                <Link
                  href={`/${locale}/about`}
                  className="
    mt-5
    inline-block
    text-[#0057FF]
    text-[16px]
    hover:underline
  "
                >
                  {t("more")}
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* ЧЕРНАЯ ЛИНИЯ */}
        <div className="mb-10 w-full h-[1px] mt-24 bg-black/70" />
      </div>
    </section>
  );
}