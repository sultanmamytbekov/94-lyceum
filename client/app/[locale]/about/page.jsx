"use client";

import { useState } from "react";
import beg from "../../components/ChooseUs/image/mainLogo2.png";
import { useTranslations} from "next-intl";

export default function AboutPage() {
    const [open, setOpen] = useState(false);
    const t = useTranslations("about");

    return (
        <main
            className="min-h-screen py-10 md:py-14"
            style={{
                backgroundImage: `url(${beg.src})`,
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

                {/* Заголовок */}
                <h1
                    className="
            text-[#003878]
            text-[42px]
            sm:text-[54px]
            md:text-[64px]
            leading-none
            mb-10
          "
                >
                    {t("title")}
                </h1>

                {/* Карточка */}
                <div
                    className="
            bg-white/95
            rounded-[30px]
            shadow-[0_10px_25px_rgba(0,0,0,0.15)]
            px-6
            sm:px-8
            md:px-10
            py-8
          "
                >
                    <h2
                        className="
              text-[#003B8F]
              text-[24px]
              sm:text-[32px]
              md:text-[40px]
              leading-tight
              mb-6
            "
                    >
                        {t("more")}
                    </h2>


                    <div
                        className={`
    border-t
    border-gray-200
    pt-6
    text-[#2F2F2F]
    text-[15px]
    sm:text-[17px]
    md:text-[20px]
    leading-[1.8]
    overflow-hidden
    transition-all
    duration-500
    ${open ? "max-h-[5000px]" : "max-h-[300px]"}
  `}
                    >
                    {t("text")}
                    </div>

                    <div className="flex flex-col items-center mt-8">

                        <button
                            onClick={() => setOpen(!open)}
                            className="
                bg-[#003B8F]
                text-white
                px-10
                py-3
                rounded-full
                text-lg
                hover:bg-[#002f72]
                transition
              "
                        >
                            {open ? t("prev") : t("next")}
                        </button>

                        <button
                            onClick={() => setOpen(!open)}
                            className="
                mt-3
                text-[#003B8F]
                text-4xl
              "
                        >
                            {open ? "▲" : "▼"}
                        </button>

                    </div>
                </div>

            </div>
        </main>
    );
}