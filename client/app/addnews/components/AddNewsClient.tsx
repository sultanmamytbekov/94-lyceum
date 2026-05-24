"use client";

import formatDate from "@/helpers/date";
import {
  useDeleteNewsMutation,
  useGetAllNewsQuery,
} from "@/app/redux/api/news/news";
import { useNewsModal } from "@/zustand/allState";
import { Trash2, ExternalLink, PencilIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import AddNewsModal from "./AddNewsModal";

export default function AddNewsClient() {
  const router = useRouter();

  const [deleteNews] = useDeleteNewsMutation();
  const { data, isLoading, refetch } = useGetAllNewsQuery();

  const { open, isOpen, setSelectedNews } = useNewsModal();


  // 🔒 Защита страницы для админа
//   useEffect(() => {
//     if (user === null) return; // ждем загрузки пользователя
//     if (!isAdmin) router.replace("/"); // если не админ → главная
//   }, [user, isAdmin, router]);

//   if (!user || !isAdmin) {
//     return <div className="flex flex-col items-center justify-center min-h-[60vh]">
//   <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-b-4 mb-4"></div>
//   <p className="text-gray-700 text-lg font-medium">Загрузка...</p>
// </div>; // показываем пока идет проверка
//   }

  const handleDeleteNews = async (id: string) => {
    try {
      if (confirm("Удалить новость?")) {
        await deleteNews({ id }).unwrap();
        refetch();
      }
    } catch {
      alert("Ошибка при удалении");
    }
  };

  return (
    <div className="p-4 md:p-6">

      <h1 className="text-[24px] text-black font-[500] mb-4">Список Новостей</h1>

      <div className="flex justify-end mb-4">
        <button
          onClick={open}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Добавить новость
        </button>
      </div>

      {/* 📱 MOBILE VERSION */}
      <div className="space-y-[35px] text-black md:hidden">

        {isLoading
          ? [1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-gray-100 rounded-md overflow-hidden">
              <div className="w-full h-[200px] bg-gray-300 animate-pulse" />
              <div className="p-4 space-y-2">
                <div className="w-[200px] h-[18px] bg-gray-300 animate-pulse rounded" />
                <div className="w-[120px] h-[14px] bg-gray-300 animate-pulse rounded" />
                <div className="w-full h-[14px] bg-gray-300 animate-pulse rounded" />
              </div>
            </div>
          ))

          : data?.map((article: any) => (
            <div
              key={article.id}
              className="bg-white  rounded-md overflow-hidden shadow-sm"
            >

              <img
                src={article.images?.[0]}
                className="w-full h-[200px] object-cover"
              />

              <div className="p-4">

                <h2 className="text-[18px] font-semibold mb-1">
                  {article.title}
                </h2>

                <p className="text-[12px] text-gray-500 mb-2">
                  {formatDate(article.createdAt)}
                </p>

                <p className="text-[14px] text-gray-700 mb-3">
                  {article.descriptions?.[0]?.slice(0, 120)}...
                </p>

                <div className="flex gap-4">

                  <PencilIcon
                    onClick={() => {
                      setSelectedNews(article);
                      open();
                    }}
                    className="w-5 h-5 cursor-pointer hover:text-green-600"
                  />

                  <ExternalLink
                    className="w-5 h-5 cursor-pointer"
                  />

                  <Trash2
                    onClick={() => handleDeleteNews(article.id)}
                    className="w-5 h-5 cursor-pointer hover:text-red-600"
                  />

                </div>

              </div>

            </div>
          ))
        }

      </div>

      {/* 💻 DESKTOP TABLE */}
      <div className="hidden md:block overflow-x-auto rounded-md">

        <table className="min-w-full divide-y divide-gray-200">

          <thead className="bg-gray-200 text-[#1d53c5]">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium">img</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Тема</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Дата</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Описание</th>
              <th className="px-4 py-3 text-left text-sm font-medium">Управление</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            {isLoading
              ? [1, 2, 3].map((_, idx) => (
                <tr key={idx}>
                  <td className="p-4 ">
                    <div className="w-[60px] h-[40px] bg-gray-300 animate-pulse rounded" />
                  </td>
                  <td className="p-4">
                    <div className="w-[200px] h-[14px] bg-gray-300 animate-pulse rounded" />
                  </td>
                  <td className="p-4">
                    <div className="w-[120px] h-[14px] bg-gray-300 animate-pulse rounded" />
                  </td>
                  <td className="p-4">
                    <div className="w-[150px] h-[14px] bg-gray-300 animate-pulse rounded" />
                  </td>
                  <td className="p-4 flex gap-3">
                    <PencilIcon className="w-4 h-4 text-gray-400" />
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                    <Trash2 className="w-4 h-4 text-gray-400" />
                  </td>
                </tr>
              ))

              : data?.map((article: any) => (
                <tr className="text-black" key={article.id}>

                  <td className="p-4">
                    <img
                      className="w-[60px] h-[40px] object-cover rounded"
                      src={article.images?.[0]}
                    />
                  </td>

                  <td className="p-4">{article.title}</td>

                  <td className="p-4">
                    {formatDate(article.createdAt)}
                  </td>

                  <td className="p-4">
                    {article.descriptions?.[0]?.slice(0, 20)}...
                  </td>

                  <td className="p-4 flex gap-3">

                    <PencilIcon
                      onClick={() => {
                        setSelectedNews(article);
                        open();
                      }}
                      className="w-4 h-4 cursor-pointer hover:text-green-600"
                    />

                    <ExternalLink
                      onClick={() => router.push(`/modalnewsblock/${article.id}`)}
                      className="w-4 h-4 cursor-pointer"
                    />
                    <Trash2
                      onClick={() => handleDeleteNews(article.id)}
                      className="w-4 h-4 cursor-pointer hover:text-red-600"
                    />

                  </td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

      {isOpen && <AddNewsModal />}

    </div>
  );
}