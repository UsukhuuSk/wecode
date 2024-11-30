const BASEURL = process.env.NEXT_PUBLIC_API_URL;

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function GetFileUrl(fileId: any) {
  return `${BASEURL}/file/${fileId}`
}

export function GetThumbnailUrl(fileId: any) {
  return `${BASEURL}/file/thumbnail/${fileId}`
}