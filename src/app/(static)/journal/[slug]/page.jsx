/** @format */

"use client";
import { Editor } from "primereact/editor";
import { API } from "@/api";
import { journalDetail } from "@/assets";
import Heading from "@/components/general/Heading";
import Image from "next/image";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Journal",
//   description: "Expedition Orange | Journal",
// };

function page({ params: { slug } }) {
  const [blog, setBlog] = useState({});
  const getBlog = async () => {
    try {
      const res = await API.getBlogById(slug);
      setBlog(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      {blog?.picture && (
        <Image
          src={blog?.picture}
          alt="blog"
          width={1000}
          height={1000}
          className=" w-full sm:h-full h-[55vw] max-h-[820px] "
        />
      )}
      <div className="container text-wrap break-all my-16 md:my-24">
        <div className="md:space-y-5 spacey-3 md:mb-[50px] mb-[30px]">
          {blog?.createdAt && (
            <p className="md:text-[22px] text-[18px] font-bold text-primaryBrown">
              {new Date(blog?.createdAt).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          <Heading heading={blog?.title}></Heading>
          <p className="md:text-[22px] text-[18px] font-bold text-primaryBrown italic">
            {blog?.quotation}
          </p>

          <Editor
            readOnly
            id={blog?.id}
            value={blog?.content}
            headerTemplate={<></>}
            style={{ height: "auto", maxWidth: "100%" }}
          />
        </div>
        <div className="md:text-[22px] text-[18px] font-bold md:space-y-5 spacey-3">
          {blog?.admin?.username && (
            <p className="text-primaryBrown">-{blog?.admin?.username}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
