"use client";

import { useGetAllNewsQuery } from "@/app/redux/api/news/news";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import { useState, useMemo } from "react";
import Header from "@/app/components/Header/Header";
import beg from "../../components/ChooseUs/image/mainLogo2.png";
import { useParams } from "next/navigation";

export default function NewsClient() {
  const router = useRouter();
  const { isLoading, data } = useGetAllNewsQuery();
  const params = useParams();
  const [selectedEvent, setSelectedEvent] = useState("Все");

  const events = useMemo(() => {
    if (!data) return [];
    const unique = Array.from(new Set(data.map((item) => item.event)));
    return ["Все", ...unique];
  }, [data]);

  const filteredNews = useMemo(() => {
    if (!data) return [];
    if (selectedEvent === "Все") return data;
    return data.filter((item) => item.event === selectedEvent);
  }, [data, selectedEvent]);

  return (
    <>
      <Header />

      <div className="h-[106px]" />

      <main
        className="min-h-screen py-10"
        style={{
          backgroundImage: `url(${beg.src})`,
        }}
      >
        <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Заголовок */}
          <div className="mb-10">
            <h1
              className="
                text-[#003878]
                text-[42px]
                sm:text-[54px]
                md:text-[64px]
                leading-none
                mb-6
              "
            >
              Новости
            </h1>

            {/* Фильтры */}
            <div className="flex flex-wrap gap-3">
              {events.map((event) => (
                <button
                  key={event}
                  onClick={() => setSelectedEvent(event)}
                  className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    transition
                    ${selectedEvent === event
                      ? "bg-[#003B8F] text-white shadow-lg"
                      : "bg-white text-[#003B8F] border border-[#003B8F]/20 hover:bg-[#003B8F]/5"
                    }
                  `}
                >
                  {event}
                </button>
              ))}
            </div>
          </div>

          {/* Новости */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-8
              pb-10
            "
          >
            {isLoading
              ? [1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="
                      bg-white
                      rounded-[24px]
                      shadow-[0_10px_25px_rgba(0,0,0,0.12)]
                      overflow-hidden
                    "
                >
                  <div className="w-full h-56 bg-gray-300 animate-pulse"></div>

                  <div className="p-5 space-y-3">
                    <div className="w-[120px] h-[12px] bg-gray-300 rounded animate-pulse"></div>
                    <div className="w-[80%] h-[20px] bg-gray-300 rounded animate-pulse"></div>
                    <div className="w-full h-[14px] bg-gray-300 rounded animate-pulse"></div>
                  </div>
                </div>
              ))
              : filteredNews.map((article) => (
                <div
                  key={article.id}
                  onClick={() =>
                    router.push(`/${params.locale}/modalnewsblock/${article.id}`)
                    }
            className="
            bg-white/95
            rounded-[24px]
            shadow-[0_10px_25px_rgba(0,0,0,0.12)]
            overflow-hidden
            hover:-translate-y-1
            hover:shadow-[0_15px_35px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
            cursor-pointer
            "
                  >
            <img
              src={article.images?.[0]}
              alt={article.title}
              className="
                        w-full
                        h-56
                        object-cover
                      "
            />

            <div className="p-5">
              <div className="flex items-center justify-between text-[12px] text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {article.eventDate}
                </span>

                <span
                  className="
                            px-3
                            py-1
                            bg-[#003B8F]
                            text-white
                            rounded-full
                            text-[11px]
                          "
                >
                  {article.event}
                </span>
              </div>

              <h2
                className="
                          text-[18px]
                          text-[#003B8F]
                          font-semibold
                          leading-snug
                          mb-3
                        "
              >
                {article.title}
              </h2>

              <p className="text-gray-600 text-[14px] line-clamp-3 leading-6">
                {article.descriptions?.[0]}
              </p>
            </div>
          </div>
                ))}
        </div>
      </article>
    </main >
    </>
  );
}