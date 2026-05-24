"use client";

import { useEffect, useState, useRef } from "react";
import { Minus, Plus, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  useAddNewsMutation,
  useEditNewsMutation,
  useGetAllNewsQuery,
} from "@/app/redux/api/news/news";
import { useNewsModal } from "@/zustand/allState";
import { useFormNews, useNewsDescr } from "@/zustand/newsState";
import { uploadToCloudinary } from "@/utils/upload";

export default function AddNewsModal() {
  const [addNews, { isLoading }] = useAddNewsMutation();
  const [editNews, { isLoading: isEditLoading }] = useEditNewsMutation();
  const { refetch } = useGetAllNewsQuery();

  const {
    form,
    setField,
    addDescription,
    removeDescription,
    addImage,
    removeImage,
    setVideo,
    resetForm,
  } = useFormNews();

  const { description, setDescr, resetDescr } = useNewsDescr();
  const { close, selectedNews } = useNewsModal();

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [videoLoading, setVideoLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    for (const file of Array.from(files)) {
      try {
        const imageUrl = await uploadToCloudinary(file);
        addImage(imageUrl);
      } catch (error) {
        console.error("Ошибка при загрузке изображения:", error);
      }
    }
  };

  const handleVideo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("video/")) {
      alert("Можно загружать только видео");
      return;
    }

    const maxSize = 20 * 1024 * 1024;
    if (file.size > maxSize) {
      alert("Видео должно быть меньше 20MB");
      return;
    }

    try {
      setVideoLoading(true);
      const videoUrl = await uploadToCloudinary(file, "video");
      setVideo(videoUrl);
    } catch (error) {
      console.error("Ошибка загрузки видео:", error);
    } finally {
      setVideoLoading(false);
    }
  };

  const addDescriptionToArray = () => {
    if (!description.trim()) return;
    addDescription(description);
    resetDescr();
  };

  useEffect(() => {
    if (selectedNews) {
      setField("title", selectedNews.title ?? "");
      setField("images", (selectedNews.images ?? []) as string[]);
      setField("descriptions", selectedNews.descriptions ?? []);
      setField("eventDate", selectedNews.eventDate ?? "");
      setField("nameBlock", selectedNews.nameBlock ?? "");
      setField("event", selectedNews.event ?? "");
      setField("video", selectedNews.video ?? "");
      setCurrentImgIndex(0);
    }
  }, [selectedNews]);

  const addNewsForm = async () => {
    try {
      await addNews({ ...form, createdAt: new Date().toISOString() });
      resetForm();
      refetch();
      close();
    } catch (error) {
      console.error("Ошибка при добавлении новости:", error);
    }
  };

  const editNewsForm = async () => {
    try {
      const id = selectedNews?.id;
      if (!id) return;
      await editNews({ id, form });
      resetForm();
      refetch();
      close();
    } catch (error) {
      console.error("Ошибка при редактировании новости:", error);
    }
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) =>
      prev === 0 ? form.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImgIndex((prev) =>
      prev === form.images.length - 1 ? 0 : prev + 1
    );
  };

  const removeCurrentImage = () => {
    removeImage(currentImgIndex);
    setCurrentImgIndex((prev) =>
      prev >= form.images.length - 1 ? form.images.length - 2 : prev
    );
  };

  return (
    <div
      onClick={() => {
        close();
        resetForm();
      }}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-10 backdrop-blur-sm overflow-y-auto"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative text-[#000000] border-[#979191] w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 flex flex-col max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={() => {
            close();
            resetForm();
          }}
          className="absolute text-black top-4 right-4 z-20"
        >
          <X />
        </button>

        <h2 className="text-2xl text-black font-semibold mb-4 text-center">
          {selectedNews ? "Изменить новость" : "Добавить новость"}
        </h2>

        <div className="space-y-4 flex-1">

          {/* Видео */}
          <div>
            <p className="text-sm text-black font-medium mb-2">Видео</p>

            {!form.video && (
              <label className="cursor-pointer block">
                <div className="border-2 text-black border-dashed border-purple-300 rounded-xl p-6 text-center hover:bg-purple-50 transition">
                  {videoLoading ? "Загрузка видео..." : "Нажмите чтобы загрузить видео"}
                  <input
                    type="file"
                    accept="video/*"
                    className="hidden"
                    onChange={handleVideo}
                  />
                </div>
              </label>
            )}

            {form.video && (
              <div className="relative  mt-3 bg-gray-100 rounded-xl overflow-hidden">
                <video
                  src={form.video}
                  controls
                  className="w-full max-h-60 object-contain"
                />
                <button
                  onClick={() => setVideo("")}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Фото */}
          <label className="cursor-pointer">
            <div className="border-2 text-black border-dashed border-blue-300 rounded-xl p-6 text-center hover:bg-blue-50 transition">
              Нажмите чтобы загрузить фото
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImages}
              />
            </div>
          </label>

          {form.images.length > 0 && (
            <div className="relative w-full h-48 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={form.images[currentImgIndex]}
                alt="preview"
                className="w-full h-full object-cover"
              />

              <button
                onClick={removeCurrentImage}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
              > 
                ✕
              </button>

              {form.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded-full"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 px-2 py-1 rounded-full"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>
          )}

          <input
            placeholder="Введите заголовок"
            value={form.title || ""}
            onChange={(e) => setField("title", e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            placeholder="Название блока"
            value={form.nameBlock || ""}
            onChange={(e) => setField("nameBlock", e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            placeholder="Событие"
            value={form.event || ""}
            onChange={(e) => setField("event", e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="date"
            value={form.eventDate || ""}
            onChange={(e) => setField("eventDate", e.target.value)}
            className="w-full border rounded-lg px-4 py-2"
          />

          <div className="space-y-2">
            {form.descriptions?.map((item: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start justify-between border px-2 py-1 rounded gap-2"
              >
                <span className="flex-1 break-words">{item}</span>
                <Minus
                  onClick={() => removeDescription(idx)}
                  className="cursor-pointer w-5 h-5"
                />
              </div>
            ))}
          </div>

          <div className="relative">
            <textarea
              placeholder="Описание"
              value={description}
              onChange={(e) => setDescr(e.target.value)}
              rows={3}
              className="w-full border rounded-lg px-4 py-2 pr-10"
            />
            <button
              onClick={addDescriptionToArray}
              className="absolute top-2 right-2 text-blue-600"
            >
              <Plus />
            </button>
          </div>
        </div>

        <div className="mt-4">
          {selectedNews ? (
            <button
              onClick={editNewsForm}
              disabled={isEditLoading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              {isEditLoading ? "Сохраняем..." : "Сохранить"}
            </button>
          ) : (
            <button
              onClick={addNewsForm}
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              {isLoading ? "Сохраняем..." : "Добавить"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}