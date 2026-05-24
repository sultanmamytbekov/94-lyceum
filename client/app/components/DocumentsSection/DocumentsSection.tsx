"use client";

export default function DocumentsSection() {
  const documents = [
    {
      icon: "🖊️",
      text: "Заявление,\nадресованное директору",
    },
    {
      icon: "📄",
      text: "Оригинал документа\nоб образовании",
    },
    {
      icon: "🏥",
      text: "Медицинская\nсправка по форме 086",
    },
    {
      icon: "🏠",
      text: "Справка с места жительства\n(адрес и состав семьи)",
    },
    {
      icon: "🆔",
      text: "Копия паспорта или\nсвидетельства о рождении",
    },
    {
      icon: "👨‍👩‍👦",
      text: "Копия паспорта\nодного из родителей",
    },
    {
      icon: "📸",
      text: "6 фотографий 3×4 см",
    },
    {
      icon: "🎖️",
      text: "Копия приписного свидетельства\nили военного билета",
    },
  ];

  return (
    <section className="w-full py-[40px] md:py-[80px] px-3 md:px-4">
      {/* основной блок */}
      <div
        className="
          max-w-[1550px]
          mx-auto
          rounded-[26px]
          md:rounded-[32px]
          border
          border-[#d9d9d9]
          bg-[#f4f4f4]
          shadow-[0px_8px_40px_rgba(0,0,0,0.10)]
          px-[16px]
          md:px-[40px]
          py-[35px]
          md:py-[55px]
        "
      >
        {/* title */}
        <div
          className="
            flex
            items-center
            justify-center
            gap-[10px]
            md:gap-[35px]
            mb-[35px]
            md:mb-[55px]
            flex-wrap
          "
        >
          <span className="text-[22px] md:text-[34px]">
            📋
          </span>

          <h2
            className="
              text-[#0B3B82]
              text-[24px]
              md:text-[38px]
              leading-[120%]
              text-center
              font-normal
              max-w-[320px]
              md:max-w-full
            "
            style={{
              fontFamily: "sans-serif",
            }}
          >
            Перечень документов для поступления
          </h2>

          <span className="text-[22px] md:text-[34px]">
            📋
          </span>
        </div>

        {/* list */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-[14px]
            md:gap-[22px]
          "
        >
          {documents.map((item, index) => (
            <div
              key={index}
              className="
                group
                w-full
                max-w-[300px]
                md:max-w-[1080px]
                min-h-[64px]
                md:min-h-[74px]
                rounded-[20px]
                md:rounded-[999px]
                bg-[#ECECFB]
                border
                border-[#e8e8f6]
                shadow-[0px_6px_22px_rgba(0,0,0,0.12)]
                flex
                items-center
                justify-center
                gap-[10px]
                md:gap-[16px]
                px-[16px]
                md:px-[30px]
                py-[12px]
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0px_10px_30px_rgba(0,0,0,0.18)]
                hover:bg-white
                cursor-pointer
              "
            >
              {/* icon */}
              <span
                className="
                  text-[16px]
                  md:text-[22px]
                  shrink-0
                  self-start
                  mt-[2px]
                "
              >
                {item.icon}
              </span>

              {/* text */}
              <p
                className="
                  text-[#1A1A1A]
                  text-[14px]
                  md:text-[31px]
                  leading-[130%]
                  md:leading-[100%]
                  text-center
                  whitespace-pre-line
                  transition-all
                  duration-300
                  group-hover:text-[#0B3B82]
                "
                style={{
                  fontFamily: "sans-serif",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}