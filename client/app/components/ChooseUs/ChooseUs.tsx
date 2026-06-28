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
      className: "min-h-[335px]",
    },
    {
      title: t("card2.title"),
      text: t("card2.text"),
      className: "min-h-[195px]",
    },
    {
      title: t("card4.title"), // специально раньше card3
      text: t("card4.text"),
      className: "min-h-[195px]",
    },
    {
      title: t("card3.title"),
      text: t("card3.text"),
      className: "min-h-[335px] mt-0 lg:mt-[-135px]",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#f5f5f5] py-10 md:py-14"
      style={{
        backgroundImage: `url(${beg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10">
        {/* Title */}
        <h2
          className="
    text-center
    text-[#003B8F]
    text-[30px]
    sm:text-[36px]
    md:text-[44px]
    font-medium
    mb-14
  "
        >
          {t("title")}
        </h2>

        {/* Cards */}
        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-10 lg:gap-y-8 items-start">
          {items.map((item, index) => (
            <div key={index}>
              <div
                className={`
  bg-white
  rounded-[38px]
  shadow-[0_6px_25px_rgba(0,0,0,0.06),0_22px_55px_rgba(0,0,0,0.10)]
  px-8
  py-7
  ${item.className}
          transition-all
          duration-300
          hover:-translate-y-1
  hover:shadow-[0_6px_25px_rgba(0,0,0,0.06),0_22px_55px_rgba(0,0,0,0.10)]
`}
              >
                <h3 className="flex items-start gap-3 mb-5">
                  <span className="text-black text-[18px] leading-none mt-2">
                    •
                  </span>

                  <span
                    className="
              text-[#003B8F]
              text-[24px]
              sm:text-[28px]
              font-medium
              leading-tight
            "
                  >
                    {item.title}
                  </span>
                </h3>

                <p
                  className="
            pl-6
            whitespace-pre-line
            text-[#5C5C5C]
            text-[16px]
            sm:text-[17px]
            leading-7
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