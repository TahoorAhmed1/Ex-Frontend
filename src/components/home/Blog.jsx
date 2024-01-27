import React, { useEffect, useState } from "react";
import BlogCard from "../general/BlogCard";
import Heading from "../general/Heading";
import { useRouter } from "next/navigation";
import Button from "../general/Button";
import { API } from "@/api";

function Blog({ bool }) {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    try {
      const res = await API.getBlogs(1, 3);
      // console.log(res)
      setBlogs(res?.data?.data?.blogs);
    } catch (error) {
      console.log(error, "error");
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <div className="text-center">
        <Heading heading="Journal" />
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3  mt-5">
        {blogs?.map((blog, index) => (
          <BlogCard blog={blog} index={index} bool={bool} key={index} />
        ))}
      </div>
      <div className=" flex justify-center mt-8 ">
        <Button
          name={"View All"}
          handleClick={() => {
            router.push("/journal");
          }}
        />
      </div>
    </div>
  );
}

export default Blog;
