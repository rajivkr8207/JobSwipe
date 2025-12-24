"use client";
import { jobsdata } from "@/data/jobsdata";
import JobCard from "./JobCard";
import { useState } from "react";
import { Job } from "@/types/job";
const SwiperDeck = () => {
  const [card, setCard] = useState<Job[]>(jobsdata)
  return (
    <>
      <div className="allswipercard md:w-[350px] w-full h-[700px] bg-[#fff] rounded-2xl grid  place-items-center relative">
        {card?.map((job, index) => (
          <JobCard jobdata={job} key={index} setCard={setCard} />
        ))}
      </div>
    </>
  );
};

export default SwiperDeck;
