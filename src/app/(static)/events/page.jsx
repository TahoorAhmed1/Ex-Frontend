"use client";
import { API } from "@/api";
import { EventCard } from "@/components/events/EventCard";
import Button from "@/components/general/Button";
import Heading from "@/components/general/Heading";
import { SearchBar } from "@/components/general/SearchBar";
import React, { useEffect, useState } from "react";

function page() {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState([]);
  const [total, setTotal] = useState(0);
  const [loader, setLoader] = useState(false);
  const getEvents = async (page) => {
    try {
      setLoader(true);
      const res = await API.getEvents(page, 3);
      setEvents([...events, ...res?.data?.data?.events]);
      setFilter([...events, ...res?.data?.data?.events]);
      setTotal(res?.data?.data?.totalEventCount);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  const handleMore = () => {
    getEvents(page + 1);
    setPage(page + 1);
  };
  useEffect(() => {
    getEvents(page);
  }, []);

  const [text, setText] = useState("");
  const handleSearch = () => {
    let filteredArray;
    text
      ? (filteredArray = events.filter((item) =>
          item.description.toLowerCase().includes(text)
        ))
      : (filteredArray = [...events]);

    setFilter(filteredArray);
  };

  return (
    <div className="container bg-white my-24 md:my-32 ">
      <div className="flex justify-center">
        {/* <Heading heading={"Events"} /> */}
        <h2 className={`sm:text-[35px] text-[24px] font-semibold text-black`}>
          Events
        </h2>
      </div>
      <div className="flex flex-col justify-center mt-4">
        <SearchBar
          buttonName={"Find Events"}
          placeholder={"Search for events"}
          text={text}
          setText={setText}
          handleClick={handleSearch}
        />
        {filter?.map((i, index) => {
          return <EventCard item={i} key={index} index={index} />;
        })}
        <hr className="border mt-12 border-[#BC5F2E]" />
        <div className="flex justify-center items-center mt-8">
          {total !== events?.length && (
            <Button
              name={"View More"}
              handleClick={handleMore}
              loader={loader}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default page;
