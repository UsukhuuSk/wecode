let BASEURL = process.env.NEXT_PUBLIC_API_URL;
if (!BASEURL?.endsWith('/')) {
  BASEURL += '/'
}
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function GetFileUrl(fileId: any) {
  return `${BASEURL}file/${fileId}`
}

export function GetThumbnailUrl(fileId: any) {
  return `${BASEURL}file/thumbnail/${fileId}`
}

export async function DownloadFile(fileUrl: any) {
  try {
    const response = await fetch(fileUrl);

    if (!response.ok) {
      throw new Error('File download failed');
    }

    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = objectUrl;
    a.download = ''; 

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(objectUrl);
  } catch (error) {
    console.error('Error downloading file:', error);
  }
}