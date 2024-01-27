/** @format */

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { API } from "@/api";
import Button from "../general/Button";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export default function GallerySlugComp({ bool = true, home, slug }) {
  const router = useRouter();
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loader, setLoader] = useState(false);

  const getGalley = async (page) => {
    try {
      setLoader(true);
      if (!slug) {
        const res = await API.getGallery();
        setGallery(res?.data?.data);
      } else if (slug) {
        // get gallery by year and year is present in slug
        const year = slug.split("-")[1];
        // console.log(page, "page")
        const res = await API.getGalleryByYear(year, page, 10);
        setGallery([...gallery, ...res?.data?.data?.gallery]);
        setTotal(res?.data?.data?.totalMediaCount);
      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      setLoader(false);
    }
  };

  const handleMore = () => {
    getGalley(page + 1);
    setPage(page + 1);
  };

  useEffect(() => {
    getGalley(page);
  }, []);

  return (
    <>
      <div className=" gird grid-cols-3 lg:columns-3 md:columns-2 columns-1 gap-7  ">
        {slug ? (
          <PhotoProvider>
            {gallery?.map((item, index) => {
              return (
                <PhotoView src={item.url} key={index}>
                  <div
                    // onClick={() => {
                    //   !home &&
                    //     router.push(`/photo-gallery/${item.id}-${item.year}`);
                    // }}
                    // key={index}
                    className={`overflow-hidden rounded-2xl ${
                      index !== 0 && "mt-2"
                    } border-[6px] border-green-background ${
                      !slug && "relative group"
                    } ${
                      bool &&
                      (index % 2 == 0 ? "fade-in-right" : "fade-in-left")
                    }
            ${!home && "cursor-pointer"} 
            `}
                  >
                    <Image
                      src={item.url}
                      alt={`galleryImage${index + 1}`}
                      width={1000}
                      height={1000}
                      className={`w-full !transition-all !duration-300 !ease-in-out 
              hover:scale-105 group-hover:scale-105`}
                    />
                    <div
                      className={`${
                        !slug
                          ? "sm:text-3xl text-[20px] absolute flex items-center justify-center min-h-full w-full text-center top-0 right-0 bottom-0 left-0 bg-black/60 font-bold text-primaryBrown"
                          : "hidden"
                      } `}
                    >
                      <p>{item.year}</p>
                    </div>
                  </div>
                </PhotoView>
              );
            })}
          </PhotoProvider>
        ) : (
          gallery?.map((item, index) => {
            return (
              <div
                onClick={() => {
                  router.push(`/photo-gallery/${item.id}-${item.year}`);
                }}
                key={index}
                className={`overflow-hidden rounded-2xl ${
                  index !== 0 && "mt-2"
                } border-[6px] border-green-background ${
                  !slug && "relative group"
                } ${bool && (index % 2 == 0 ? "fade-in-right" : "fade-in-left")}
          ${!home && "cursor-pointer"} 
          `}
              >
                <Image
                  src={item.url}
                  alt={`galleryImage${index + 1}`}
                  width={1000}
                  height={1000}
                  className={`w-full !transition-all !duration-300 !ease-in-out 
            hover:scale-105 group-hover:scale-105`}
                />
                <div
                  className={`${
                    !slug
                      ? "sm:text-3xl text-[20px] absolute flex items-center justify-center min-h-full w-full text-center top-0 right-0 bottom-0 left-0 bg-black/60 font-bold text-primaryBrown"
                      : "hidden"
                  } `}
                >
                  <p>{item.year}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="flex justify-center mt-4">
        {slug && total !== gallery?.length && (
          <Button name={"View More"} handleClick={handleMore} loader={loader} />
        )}
      </div>
    </>
  );
}
