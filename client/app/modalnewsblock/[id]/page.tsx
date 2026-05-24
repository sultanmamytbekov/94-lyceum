import NewsDetailClient from "./NewsDetailClient";

export default function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <NewsDetailClient params={params} />;
}