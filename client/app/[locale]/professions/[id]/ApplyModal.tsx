"use client"
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';


const ApplyModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const t = useTranslations('professionPage');
    const ts = useTranslations('modal');

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = {
            base: formData.get('base'),
            profession: formData.get('profession'),
            fullname: formData.get('fullname'),
            phone: formData.get('phone'),
        };

        const res = await fetch('/api/telegram', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (result.ok) {
            alert('Заявка отправлена!');
            e.target.reset();
            setIsOpen(false);
        } else {
            alert('Ошибка отправки');
        }
    };
    return (
        <>
            {/* APPLY */}
            <button
                onClick={() => setIsOpen(true)}
                className=" h-[56px] min-w-[170px] rounded-full bg-[rgba(255,255,255,0.55)] backdrop-blur-[18px] border border-white/30 text-white text-[18px] font-semibold shadow-[0_5px_20px_rgba(0,0,0,0.25)] hover:scale-105 transition"
            >
                {t("apply")}
            </button>
            {/* MODAL */}
            {isOpen && (
                <div
                    className="
      fixed inset-0 z-[999]
      flex items-center justify-center
      bg-black/40
      backdrop-blur-[7px]
      p-4
    "
                >
                    <div
                        className="
    relative
    w-full
    max-w-[490px]
    rounded-[30px]
    border border-white/60
    bg-white/60
    backdrop-blur-[30px]
    shadow-[0_8px_30px_rgba(0,0,0,0.08)]
    px-[26px]
    py-[24px]
  "
                    >
                        {/* TOP LIGHT */}
                        <div
                            className="
          pointer-events-none
          absolute inset-0
          rounded-[30px]
          bg-white/20
        "
                        />

                        {/* CLOSE */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="
          absolute right-[18px] top-[12px]
          z-20
          text-black
          transition
          hover:scale-110
        "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            >
                                <path d="M18 6L6 18" />
                                <path d="M6 6L18 18" />
                            </svg>
                        </button>

                        <div className="relative z-10">

                            {/* TITLE */}
                            <h2 className="text-center text-[30px] font-[700] text-black">
                                {ts("title")}
                            </h2>

                            <form
                                onSubmit={handleSubmit}
                                className="mt-[34px] flex flex-col gap-[18px]"
                            >
                                {/* SELECT STYLE */}
                                <div>
                                    <label className="mb-[10px] block text-[15px] text-[#666]">
                                        {ts("base")}:
                                    </label>

                                    <div className="relative">
                                        <select
                                            name="base"
                                            required
                                            className="
                  w-full
                  h-[54px]
                  appearance-none
                  rounded-full
                  border border-white/40
                  bg-[#ffffff30]
                  backdrop-blur-md
                  px-[18px]
                  pr-[56px]
                  text-[17px]
                  text-black
                  outline-none
                  shadow-[inset_0_1px_2px_rgba(255,255,255,0.45),0_4px_14px_rgba(0,0,0,0.08)]
                "
                                        >
                                            <option value="">{ts("choose")}</option>
                                            <option value="9">{ts("base9")}</option>
                                            <option value="11">{ts("base11")}</option>
                                        </select>

                                        {/* ARROW */}
                                        <div
                                            className="
                  pointer-events-none
                  absolute
                  right-[18px]
                  top-1/2
                  -translate-y-1/2
                "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#6E6E6E"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* PROFESSION */}
                                <div>
                                    <label className="mb-[10px] block text-[15px] text-[#666]">
                                        <label>{ts("profession")}</label>:
                                    </label>

                                    <div className="relative">
                                        <select
                                            name="profession"
                                            required
                                            className="
                  w-full
                  h-[54px]
                  appearance-none
                  rounded-full
                  border border-white/40
                  bg-[#ffffff30]
                  backdrop-blur-md
                  px-[18px]
                  pr-[56px]
                  text-[17px]
                  text-black
                  outline-none
                  shadow-[inset_0_1px_2px_rgba(255,255,255,0.45),0_4px_14px_rgba(0,0,0,0.08)]
                "
                                        >
                                            <option value="">{ts("chooseProfession")}</option>
                                            <option value="graphic-designer">{ts("graphicDesigner")}</option>
                                            <option value="web-developer">{ts("webDeveloper")}</option>
                                            <option value="barber">{ts("barber")}</option>
                                            <option value="repair">{ts("repair")}</option>
                                            <option value="sewing">{ts("sewing")}</option>
                                            <option value="system-admin">{ts("systemAdmin")}</option>
                                        </select>

                                        <div
                                            className="
                  pointer-events-none
                  absolute
                  right-[18px]
                  top-1/2
                  -translate-y-1/2
                "
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#6E6E6E"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* NAME */}
                                <div>
                                    <label className="mb-[10px] block text-[15px] text-[#666]">
                                        {ts("fullname")}:
                                    </label>

                                    <input
                                        type="text"
                                        name="fullname"
                                        placeholder={ts("fullnamePlaceholder")}
                                        required
                                        className="
                w-full
                h-[54px]
                rounded-full
                border border-white/40
                bg-[#ffffff30]
                backdrop-blur-md
                px-[18px]
                text-[17px]
                text-black
                placeholder:text-[#8D8D8D]
                outline-none
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.45),0_4px_14px_rgba(0,0,0,0.08)]
              "
                                    />
                                </div>

                                {/* PHONE */}
                                <div>
                                    <label className="mb-[10px] block text-[15px] text-[#666]">
                                        {ts("phone")}:
                                    </label>

                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+996 XXXXXXXXX"
                                        required
                                        className="
                w-full
                h-[54px]
                rounded-full
                border border-white/40
                bg-[#ffffff30]
                backdrop-blur-md
                px-[18px]
                text-[17px]
                text-black
                placeholder:text-[#8D8D8D]
                outline-none
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.45),0_4px_14px_rgba(0,0,0,0.08)]
              "
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="
    relative
    w-full
    h-[58px]

    rounded-full

    border
    border-white/40

    bg-[#ffffff35]

    backdrop-blur-md

    text-[18px]
    font-semibold
    text-[#111]

    shadow-[
      inset_0_1px_2px_rgba(255,255,255,0.45),
      0_4px_14px_rgba(0,0,0,0.08)
    ]

    transition-all
    duration-300

    hover:bg-[#ffffff55]
    hover:scale-[1.015]

    active:scale-[0.98]
  "
                                >
                                    <span className="relative z-10">
                                        {ts("submit")}
                                    </span>

                                    {/* glow */}
                                    <div
                                        className="
      absolute
      inset-0
      rounded-full
      bg-white/20
      opacity-0
      hover:opacity-100
      transition-opacity
      duration-300
    "
                                    />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ApplyModal;