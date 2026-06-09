'use client';

import Image from 'next/image';
import logo from './image/Logo.svg';
import qr from './image/qr-code.png';
import { Phone } from 'lucide-react';
import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("footer");
    return (
        <footer className="w-full bg-[#565656] text-white">
            <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-12 md:py-14">

                 {/* DESKTOP */}
        <div className="hidden md:flex md:items-start md:justify-between">
          
          {/* LEFT */}
          <div className="max-w-[295px]">
            <Image
              src={logo}
              alt="Лицей 94"
              width={105}
              height={105}
              className="mb-4"
            />

            <p className="text-[18px] font-bold leading-[24px]">
              {t("name")}
            </p>

            <p className="text-[18px] font-bold leading-[24px]">
              {t("address")}
            </p>
          </div>

          {/* CENTER */}
          <div>
            <div className="mb-4 mt-8 flex items-center gap-2">
              <h3 className="text-[22px] font-bold">{t("contacts")}</h3>

              {/* <Phone size={20} /> */}
            </div>

            <div className="space-y-1 text-[18px] leading-[28px]">
              <p>📞 0312 49–01–56</p>
              <p>📱 0999 800 438</p>
              <p>📱 0707 771 197</p>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-[22px] mt-8 leading-[30px]">
              <span className="font-bold">{t("instagram")}</span> Instagram
            </h3>

            <div className="mt-1 flex items-center gap-2">
              
              {/* Instagram SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="white" />
              </svg>

              <p className="text-[18px]">@prof_lisey94</p>
            </div>

            <Image
              src={qr}
              alt="QR"
              width={130}
              height={130}
              className="mt-4 rounded-[8px] bg-white p-1"
            />
          </div>
        </div>
                {/* MOBILE */}
                <div className="flex flex-col items-center md:hidden">

                    <Image
                        src={logo}
                        alt="Лицей 94"
                        width={90}
                        height={90}
                    />

                    <p className="mt-4 text-center text-[22px] font-bold leading-[30px]">
                        Профессиональный лицей №94
                    </p>

                    <p className="text-center text-[20px] leading-[28px]">
                        г. Бишкек, ул. Купянская 30
                    </p>

                    {/* CONTACT + INSTA PARALLEL */}
                    <div className="mt-10 flex w-full justify-center gap-8">

                        {/* CONTACTS */}
                        <div>
                            <div className="mb-3 flex items-center gap-1">
                                <p className="text-[18px] font-bold">Контакты</p>

                                <Phone size={16} />
                            </div>

                            <div className="text-[15px] leading-[24px]">
                                <p>0312 49–01–56</p>
                                <p>0999 800 438</p>
                                <p>0707 771 197</p>
                            </div>
                        </div>

                        {/* INSTAGRAM */}
                        <div>
                            <p className="text-[18px] font-bold">
                                Мы в Instagram
                            </p>

                            <div className="mt-2 flex items-center gap-2">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="4" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="white" />
                                </svg>

                                <p className="text-[15px]">@prof_lisey94</p>
                            </div>

                            <Image
                                src={qr}
                                alt="QR"
                                width={100}
                                height={100}
                                className="mt-3 rounded-[6px] bg-white p-1"
                            />
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-10 text-center">
                    <p className="text-[14px] text-white/80 md:text-[18px]">
                        {t("copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
}