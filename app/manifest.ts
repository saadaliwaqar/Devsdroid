import { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DevsDroid — Software, AI Assistants & Automation",
    short_name: "DevsDroid",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#07090F",
    theme_color: "#07090F",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
