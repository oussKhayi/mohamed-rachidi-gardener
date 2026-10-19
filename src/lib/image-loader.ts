"use client";

type LoaderProps = { src: string; width: number; quality?: number };

// Unsplash redimensionne les images via son CDN. Les fichiers locaux sont servis tels quels.
export default function imageLoader({ src, width, quality }: LoaderProps) {
  if (src.startsWith("https://images.unsplash.com")) {
    return `${src}?auto=format&fit=crop&w=${width}&q=${quality || 70}`;
  }
  return `${src}?w=${width}`;
}
