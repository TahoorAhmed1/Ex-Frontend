"use client";
import { stories } from "@/data/stories";
import StoryCard from "./StoryCard";
import Heading from "../general/Heading";
import { useEffect, useState } from "react";
import { API } from "@/api";
import Button from "../general/Button";
import Link from "next/link";
import { notify } from "@/utils/notify";



const Stories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [stories, setStories] = useState([]);
  const pageSize = 10; // adjust the pageSize as needed

  

  useEffect(() => {
    const getStories = async () => {
      try {
        const res = await API.getStories();
        const pagesLimit = Math.ceil(res?.data?.data?.totalStoryCount / pageSize);
        setPageLimit(pagesLimit);
        setTotalPages(pagesLimit);
        let limit = Math.ceil(res?.data?.data?.totalStoryCount / pagesLimit);
        const resp = await API.getStoriespages(currentPage, limit);
        setStories((prevStories) => [...prevStories, ...resp?.data?.data?.stories]);
      } catch (error) {
        const message = error?.response?.data?.message || error?.message;
        notify("error", message);
      }
    };
  
    getStories();
  }, [currentPage, pageLimit]);
 
const key = 'name';
const unique = [...new Map(stories.map(item =>
  [item[key], item])).values()];


  let handleNextPage=()=>{
  if(currentPage < pageLimit){
    setCurrentPage(prev=> prev+1);
  }
 }
 const handleLastPage=()=>{
  if(currentPage > 1){
    setCurrentPage(prev=> prev-1);
  }
 }
  return (
    <div className="lg:w-[80%] w-full ">
      <div className="text-center">
        <Heading heading={"Stories"} />
      </div>
      <div className="mt-4">
        {unique?.map((story, index) => {
          return <StoryCard story={story} key={index} />;
        })}
      </div>
          <div className="flex gap-3 justify-center">
          {/* <Button name={"Previous"} className={`${(currentPage > pageLimit && currentPage === 1 )? "opacity-70" : "" }`} handleClick={()=>handleLastPage()} /> */}
          <Button name={"View More"} className={`${currentPage < pageLimit ? "" : "opacity-70" }`} handleClick={()=>handleNextPage()} />
          </div>
      
    </div>
  );
}

export default Stories;
