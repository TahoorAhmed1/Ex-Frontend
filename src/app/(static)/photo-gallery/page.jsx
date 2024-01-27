import React from "react";
import Heading from "@/components/general/Heading";
import GallerySlugComp from "@/components/gallery/GallerySlugComp";
import Button from "@/components/general/Button";
import Link from 'next/link'
import ResourcesLi from "@/components/resources/ResourcesLi";

export const metadata = {
  title: "Photo Gallery",
  description: "Expedition Orange | Photo Gallery",
};


export default function page() {

  const mediaLinks = [
    {
      title : "Expedition Orange travels to Amarillo to raise money for Texas veterans.",
      href : "https://www.newschannel10.com/2023/08/01/expedition-orange-travels-amarillo-raise-money-texas-veterans/"
    },
    {
      title : "Horseman Rides Across US To Bring Attention To Agent Orange.",
      href : "https://www.cbsnews.com/baltimore/news/horseman-rides-across-us-to-bring-attention-to-agent-orange/"
    },
    {
      title : "Colt Romberger and his father shared a love for horses and a deep pride in having served their country in times of war. Take a look folks.",
      href : "https://twitter.com/garysinise/status/879821185847971840"
    },
    {
      title : "In The Moment ... Remembering Vietnam On Horseback.",
      href : "https://listen.sdpb.org/news/2017-05-09/in-the-moment-remembering-vietnam-on-horseback"
    },
    {
      title : "Man to ride across the country on horseback to support Vietnam veterans",
      href : "https://www.fox43.com/article/news/local/contests/man-to-ride-across-the-country-on-horseback-to-support-vietnam-veterans/521-0fb6e907-9885-456a-a1fe-ab22c6bfc922"
    },
    {
      title : "Iraq War Veteran Colt C. Romberger departs May 1 for a 183 day, 3,000 mile horse ride across America to bring awareness to Vietnam Veterans who suffer Agent Orange related disorders.",
      href : "https://signalscv.com/2017/04/colt-c-romberger/"
    },
  ]
  return (
    <div className="container py-12 flex flex-col justify-center items-center gap-11 ">
      <div className="text-center">
        {/* <Heading heading={"Photo Gallery"} /> */}
        <h2 className={`sm:text-[35px] text-[24px] font-semibold text-black`}>
          Photo Gallery
        </h2>
      </div>
      <GallerySlugComp home={true}/>
      <div className="text-center">
        <Heading heading={"Media"} />
      </div>

      {/* video */}
      {/* <div className="rounded-xl overflow-hidden w-full">
        <iframe
          width="100%"
          height="630"
          src="https://www.youtube.com/embed/5l7EU12bHvE"
          title="RIDE UPDATE"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div> */}


      <div className=" flex flex-col gap-2">
        {mediaLinks.map((item)=>{
          return(
            <ResourcesLi
            key={item?.title}
            title={item?.title}
            href={item?.href}
            type={"media"}
            />
          )
        })}
      </div>
      {/* <Button name={"Veiw More"} /> */}
    </div>
  );
}
