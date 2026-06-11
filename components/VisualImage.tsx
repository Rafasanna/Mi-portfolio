import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

type VisualImageProps = {
  alt: string;
  className?: string;
  label: string;
  priority?: boolean;
  sizes?: string;
  src: string;
};

function publicImageExists(src: string) {
  const normalizedSrc = src.startsWith("/") ? src.slice(1) : src;
  return fs.existsSync(path.join(process.cwd(), "public", normalizedSrc));
}

export function VisualImage({
  alt,
  className = "",
  label,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 42vw",
  src
}: VisualImageProps) {
  if (!publicImageExists(src)) {
    return <ImagePlaceholder className={className} label={label} />;
  }

  return (
    <div className={`image-placeholder image-placeholder--photo ${className}`.trim()}>
      <Image alt={alt} className="visual-image__img" fill priority={priority} sizes={sizes} src={src} />
    </div>
  );
}
