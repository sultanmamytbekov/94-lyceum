"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetAllNewsQuery } from "@/app/redux/api/news/news";
import formatDate from "@/helpers/date";

export default function NewsDetailClient({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { data, isLoading, error } = useGetAllNewsQuery();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex gap-3">
          <div className="w-5 h-5 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-5 h-5 bg-blue-600 rounded-full animate-bounce [animation-delay:.2s]"></div>
          <div className="w-5 h-5 bg-blue-600 rounded-full animate-bounce [animation-delay:.4s]"></div>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Ошибка загрузки новости
      </div>
    );
  }

  const article = data.find((item: any) => item.id === id);

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen">
        Новость не найдена
      </div>
    );
  }

  const mainVideo = article.video;
  const mainImage = article.images?.[0];
  const gallery = mainVideo ? article.images : article.images?.slice(1);

  return (
    <main className="px-4 md:px-6 pt-[100px] pb-[80px] flex justify-center">
      <article className="w-full max-w-[900px] relative">

        {/* Кнопка назад */}
        <div className="absolute left-0 -top-10 flex items-center gap-2 text-[16px] md:text-[17px] tracking-tight">
          <span
            onClick={() => router.push("/")}
            className="text-black hover:text-gray-500 cursor-pointer transition-colors duration-200"
          >
            Главная
          </span>

          <span className="text-gray-400 text-[14px]">/</span>

          <span
            onClick={() => router.push("/news")}
            className="text-black hover:text-gray-500 cursor-pointer transition-colors duration-200"
          >
            Новости
          </span>
        </div>



        {/* Заголовок */}
        <h1 className="text-[24px] text-black md:text-[32px] font-semibold mb-4 text-center md:text-left">
          {article.title}
        </h1>

        {/* Дата */}
        <div className="text-gray-500 text-[14px] mb-6 text-center md:text-left">
          <span>{formatDate(article.createdAt)}</span>
          {article.event && <span> • {article.event}</span>}
        </div>

        {/* Видео */}
        {article.video && (
          <div className="w-full bg-gray-100 rounded-lg overflow-hidden aspect-video mb-6">
            <video
              src={article.video}
              controls
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Основное фото */}
        {mainVideo ? (
          <div className="w-full rounded-xl mb-6 object-cover max-h-[450px] sm:max-h-[350px]" />
        ) : (
          <img
            src={mainImage}
            alt="main"
            className="w-full rounded-xl mb-6 object-cover max-h-[450px] sm:max-h-[350px]"
          />
        )}

        {/* Галерея */}
        {gallery && gallery.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 mb-6">
            {gallery.map((img: string, idx: number) => (
              <div
                key={idx}
                className="w-full aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  alt={`gallery-${idx}`}
                />
              </div>
            ))}
          </div>
        )}

        {/* Текст */}
        <div className="space-y-4 text-gray-800 text-[16px] md:text-[17px] leading-relaxed pb-10">
          {article.descriptions?.map((text: string, idx: number) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </article>

      {/* Модалка */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
            alt="full"
          />
        </div>
      )}
    </main>
  );
}