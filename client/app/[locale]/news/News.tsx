"use client";
import { useGetAllNewsQuery } from "@/app/redux/api/news/news";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import { useState, useMemo } from "react";

export default function NewsClient() {
  const router = useRouter();
  const { isLoading, data } = useGetAllNewsQuery();

  const [selectedEvent, setSelectedEvent] = useState<string>("Все");

  // Получаем уникальные категории event
  const events = useMemo(() => {
    if (!data) return [];
    const unique = Array.from(new Set(data.map((item) => item.event)));
    return ["Все", ...unique];
  }, [data]);

  // Фильтрация
  const filteredNews = useMemo(() => {
    if (!data) return [];
    if (selectedEvent === "Все") return data;
    return data.filter((item) => item.event === selectedEvent);
  }, [data, selectedEvent]);

  return (
    <>
    <article className="w-full px-4">

      {/* HEADER + FILTER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4">

        {/* Title */}
        <h1 className="text-[22px] text-black font-semibold">
          Новости
        </h1>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {events.map((event) => (
            <button
              key={event}
              onClick={() => setSelectedEvent(event)}
              className={`px-3 py-1.5 rounded-full text-[12px] transition
                ${
                  selectedEvent === event
                    ? "bg-blue-600 text-white shadow"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
              `}
            >
              {event}
            </button>
          ))}
        </div>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 pb-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {isLoading
          ? [1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="w-full h-[140px] bg-gray-300 animate-pulse"></div>
                <div className="p-4 space-y-2">
                  <div className="w-[100px] h-[10px] bg-gray-300 rounded animate-pulse"></div>
                  <div className="w-[80%] h-[16px] bg-gray-300 rounded animate-pulse"></div>
                  <div className="w-full h-[12px] bg-gray-300 rounded animate-pulse"></div>
                </div>
              </div>
            ))
          : filteredNews.map((article) => (
              <div
                key={article.id}
                onClick={() => router.push(`/modalnewsblock/${article.id}`)}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
              >
                <img
                  src={article.images?.[0]}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">

                  <div className="flex items-center justify-between text-[11px] text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.eventDate}
                    </span>

                    <span className="px-2 py-[2px] bg-blue-100 text-blue-600 rounded text-[10px]">
                      {article.event}
                    </span>
                  </div>

                  <h2 className="text-[16px] text-black font-semibold leading-snug mb-2">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 text-[13px] line-clamp-2">
                    {article.descriptions?.[0]}
                  </p>

                </div>
              </div>
            ))}
      </div>
    </article>
    </>
  );
}