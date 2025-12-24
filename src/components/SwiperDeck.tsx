"use client";
import { jobsdata } from "@/data/jobsdata";
import JobCard from "./JobCard";
import { useState } from "react";
import { Job } from "@/types/job";
import { CircleSlash } from "lucide-react";
const SwiperDeck = () => {
  const [card, setCard] = useState<Job[]>(jobsdata);
  return (
    <>
      <div className="allswipercard md:w-[350px] w-full h-[500px]  rounded-2xl grid  place-items-center relative overflow-hidden">
        {card?.map((job, index) => (
          <JobCard jobdata={job} key={index} setCard={setCard} />
        ))}

        {card.length === 0 && (
          <div className="flex flex-col items-center justify-center absolute text-white inset-0 bg-[#3D3D3D] rounded-2xl">
            <CircleSlash className=" w-26 h-26 pb-8" />
            <div className="text-lg font-bold mb-1">No more jobs!</div>
          </div>
        )}
      </div>
    </>
  );
};

export default SwiperDeck;
