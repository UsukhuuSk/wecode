import { getFile } from "../api/serviceuser";

export const fetchImageFileById = async (id: string) => {
  try {
    const response = await getFile(id);
    if (response) {
      const blob = await response.blob();
      const imgUrl = URL.createObjectURL(blob);
      return imgUrl;
    }
  } catch (error) {
    console.error("Error fetching image file:", error);
    return null;
  }
};
