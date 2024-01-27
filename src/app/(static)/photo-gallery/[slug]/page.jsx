import GallerySlugComp from "@/components/gallery/GallerySlugComp";
import Heading from "@/components/general/Heading";
import React from "react";

export const metadata = {
  title: "Photo Gallery",
  description: "Expedition Orange | Photo Gallery",
};

export default function page({ params: { slug } }) {
  return (
    <div className="container py-12">
      <div className="text-center mb-11">
        <h2 className={`sm:text-[35px] text-[24px] font-semibold text-black`}>
          {slug?.split("-")[1]}
        </h2>
      </div>
      <GallerySlugComp slug={slug} home={true} />
    </div>
  );
}
