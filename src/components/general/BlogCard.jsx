/** @format */

import Image from "next/image";
import Link from "next/link";

function BlogCard({ blog, index, bool = true }) {
  return (
    <Link
      href={`/journal/${blog?.id}`}
      className={`text-gray-700 relative shadow-sm flex w-full break-all text-wrap transition flex-col ${
        bool && (index % 2 == 0 ? "fade-in-bottom" : "fade-in-top")
      } rounded-lg bg-white p-3 md:p-4`}
    >
      <div className="overflow-hidden rounded-lg h-[250px]">
        <Image
          src={blog?.picture}
          alt="img-blur-shadow"
          height={1000}
          width={1000}
          className="h-full transition w-full hover:scale-110 cursor-pointer object-cover"
        />
      </div>
      <div className="mt-[15px] sm:space-y-5 space-y-2 sm:pr-6">
        <div className=" sm:text-[16px] text-sm">
          {/* <p className="">{blog?.createdAt.split("T")[0]}</p> */}
          {new Date(blog?.createdAt).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <h5 className="text-blue-gray-900 sm:mb-3 mb-2 block font-sans sm:text-[22px] text-lg font-semibold antialiased">
          {blog?.title.slice(0, 15)}...
        </h5>
        <p className="sm:text-[16px] text-sm font-normal antialiased">
          {blog?.quotation.slice(0, 200)}...
        </p>
      </div>
      <div className="mt-[15px] flex items-center space-x-3">
        <p className="sm:text-[16px] text-sm text-primaryBrown">Read More</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="12"
          viewBox="0 0 30 12"
          fill="none"
          cursor={"pointer"}
        >
          <path
            d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM29.5303 6.53033C29.8232 6.23744 29.8232 5.76257 29.5303 5.46967L24.7574 0.696701C24.4645 0.403808 23.9896 0.403808 23.6967 0.696701C23.4038 0.989595 23.4038 1.46447 23.6967 1.75736L27.9393 6L23.6967 10.2426C23.4038 10.5355 23.4038 11.0104 23.6967 11.3033C23.9896 11.5962 24.4645 11.5962 24.7574 11.3033L29.5303 6.53033ZM1 6.75L29 6.75L29 5.25L1 5.25L1 6.75Z"
            fill="#C05E2B"
          ></path>
        </svg>
      </div>
    </Link>
  );
}

export default BlogCard;
