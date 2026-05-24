"use client";

import beg from "./image/mainLogo2.png";

export default function ChooseUs() {
  const items = [
    {
      title: "Бесплатное обучение",
      text: "Поступление после 9 или 11 класса.\nВы получаете аттестат\nи государственный диплом.",
    },
    {
      title: "Бесплатное проживание",
      text: "У нас есть большое общежитие\nрядом с лицеем для 400+ студентов",
    },
    {
      title: "Стипендия",
      text: "Студенты получают стипендию\nза успеваемость каждую\nмесяц регулярно",
    },
    {
      title: "Отсрочка от армии",
      text: "Мальчики призывного возраста\nосвобождаются от службы\nна время обучения.",
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
          Почему выбирают именно нас?
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
              О нас
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
                  Профессиональный лицей №94 — это современное учебное
                  заведение, готовящее специалистов в сфере IT, дизайна,
                  сервиса и технических профессий. Основан в 1972 году,
                  сегодня лицей активно внедряет новые технологии и
                  сотрудничает с работодателями.
                </p>

                <button
                  className="
                  mt-5
                  text-[#0057FF]
                  text-[16px]
                  hover:underline
                "

                >
                  Подробнее...
                </button>
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