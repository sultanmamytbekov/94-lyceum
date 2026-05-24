export const uploadToCloudinary = async (
  file: File,
  type: "image" | "video" = "image"
): Promise<string> => {
  const cloudName = "dzdf408ds";

  const url =
    type === "video"
      ? `https://api.cloudinary.com/v1_1/${cloudName}/video/upload`
      : `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "news_upload");

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Cloudinary error:", data);
      throw new Error(data.error?.message || "Ошибка загрузки");
    }

    return data.secure_url;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};