"use client";
import BlogCard from "../general/BlogCard";
import Heading from "../general/Heading";
import Button from "../general/Button";
import { useEffect, useState } from "react";
import { API } from "@/api";

function Journal() {
  const [blogs, setBlogs] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  const getBlogs = async (page) => {
    try {
      setLoader(true);
      const res = await API.getBlogs(page, 3);
      setBlogs([...blogs, ...res?.data?.data?.blogs]);
      setTotal(res?.data?.data?.totalBlogCount);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  const handleMore = () => {
    getBlogs(page + 1);
    setPage(page + 1);
  };
  useEffect(() => {
    getBlogs(page);
  }, []);

  return (
    <div className="container my-32 md:my-20 ">
      <div className="text-center">
        {/* <Heading heading={"JOURNAL"} /> */}
        <h2 className={`sm:text-[35px] text-[24px] font-semibold text-black`}>
          JOURNAL
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3  mt-5">
        {blogs?.map((blog, index) => (
          <BlogCard blog={blog} index={index} key={index} />
        ))}
      </div>
      <div className="flex justify-center md:mt-16 mt-10">
        {total !== blogs?.length && (
          <Button name={"View More"} handleClick={handleMore} loader={loader} />
        )}
      </div>
    </div>
  );
}

export default Journal;
