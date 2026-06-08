"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { useGetAllNewsQuery } from "@/app/redux/api/news/news";
import formatDate from "@/helpers/date";
import beg from "../../../components/ChooseUs/image/mainLogo2.png";

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
    <>
      <div className="h-[50px]" />

      <main
        className="min-h-screen py-10"
        style={{
          backgroundImage: `url(${beg.src})`,
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Карточка */}
          <article
            className="
            bg-white/95
            rounded-[30px]
            shadow-[0_10px_25px_rgba(0,0,0,0.15)]
            p-6
            md:p-10
          "
          >
            {/* Заголовок */}
            <h1
              className="
              text-[#003B8F]
              text-[28px]
              md:text-[42px]
              leading-tight
              mb-4
            "
            >
              {article.title}
            </h1>

            {/* Дата */}
            <div className="text-gray-500 text-sm mb-8">
              {formatDate(article.createdAt)}
              {article.event && (
                <span className="ml-2 text-[#003B8F]">
                  • {article.event}
                </span>
              )}
            </div>

            {/* Видео */}
            {article.video && (
              <div className="overflow-hidden rounded-[20px] mb-8">
                <video
                  src={article.video}
                  controls
                  className="w-full"
                />
              </div>
            )}

            {/* Главное фото */}
            {!article.video && mainImage && (
              <img
                src={mainImage}
                alt={article.title}
                className="
                w-full
                rounded-[20px]
                mb-8
                object-cover
                max-h-[500px]
              "
              />
            )}

            {/* Галерея */}
            {gallery && gallery.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {gallery.map((img: string, idx: number) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className="
                    overflow-hidden
                    rounded-[16px]
                    cursor-pointer
                  "
                  >
                    <img
                      src={img}
                      alt=""
                      className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-105
                      transition
                    "
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Текст */}
            <div
              className="
              text-[#2F2F2F]
              text-[15px]
              sm:text-[17px]
              md:text-[20px]
              leading-[1.8]
              space-y-5
            "
            >
              {article.descriptions?.map((text: string, idx: number) => (
                <p key={idx}>{text}</p>
              ))}
            </div>

            {/* Кнопка назад */}
            <div className="flex justify-center mt-10">
              <button
                onClick={() => router.push("/news")}
                className="
                bg-[#003B8F]
                text-white
                px-8
                py-3
                rounded-full
                hover:bg-[#002f72]
                transition
              "
              >
                ← Все новости
              </button>
            </div>
          </article>
        </div>

        {/* Модалка */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt=""
              className="
              max-w-full
              max-h-full
              rounded-[20px]
            "
            />
          </div>
        )}
      </main>
    </>
  );
}