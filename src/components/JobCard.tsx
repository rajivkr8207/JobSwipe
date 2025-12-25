"use client";
import Image from "next/image";
import { Heart, X } from "lucide-react";
import { Job } from "@/types/job";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";

interface props {
  jobdata: Job;
  setCard: Dispatch<SetStateAction<Job[]>>;
}
export default function JobCard({ jobdata, setCard }: props) {
  const router = useRouter();
  const [animvalue, setAnimvalue] = useState<number>(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // const opacity = useTransform(x, [-300, 0, 300], [0, 1, 0]);
  const rotate = useTransform(x, [-200, 200], [30, -30]);

  const handledragEnd = (id: string) => {
    if (x.get() < -30) {
      x.stop();
      y.stop();
      animate(x, -200, { duration: 0.8 });
      animate(y, -500, { duration: 0.8 });

      setTimeout(() => {
        setCard((prev) => prev.filter((job) => job.id !== id));
      }, 700);
    } else if (x.get() > 30) {
      x.stop();
      y.stop();
      animate(x, 200, { duration: 0.8 });
      animate(y, -500, { duration: 0.8 });

      setTimeout(() => {
        router.push(`/job/${id}`);
      }, 700);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  useMotionValueEvent(x, "change", (latest) =>{
    setAnimvalue(latest)
  });

  return (
    <>
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        style={{
          gridRow: 1,
          gridColumn: 1,
          x,
          y,
          rotate,
        }}
        onDragEnd={() => handledragEnd(jobdata.id)}
        className="w-full h-[500px] flex-shrink-0 relative swipercard hover:cursor-grab active:cursor-grabbing"
      >
        <div className="absolute z-10 bottom-5 left-0 w-full  flex justify-between px-8 pointer-events-none ">
          {animvalue < 0 && (
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center mx-2 pointer-events-auto">
              <span className="text-2xl text-white">
                <X />
              </span>
            </div>
          )}
          {animvalue > 0 && (
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-2 pointer-events-auto absolute bottom-5 right-5">
              <span className="text-2xl text-white ">
                <Heart />
              </span>
            </div>
          )}
        </div>
        <div className="w-full overflow-hidden h-full rounded-[18px] m-auto shadow-[0_2px_6px_#0004] flex items-center justify-center text-white font-semibold text-2xl tracking-wide">
          <Image
            src="https://images.unsplash.com/photo-1727969893334-236b1980b1a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={1000}
            height={1000}
            alt=""
            className="h-full w-full object-cover pointer-events-none"
          />
        </div>

        <div className="w-full absolute bottom-0 left-0 bg-[#181818e0] rounded-b-[18px] p-5 flex flex-col gap-2 shadow-[0_-2px_10px_#0005]">
          <div className="text-xl font-bold text-white mb-1">
            {jobdata?.title}
          </div>
          <div className="text-md font-semibold text-white">
            {jobdata?.company}
          </div>
          <div className="text-sm text-gray-200 mb-2">
            {jobdata?.description}
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="px-3 py-1 bg-[#282828] text-sm text-blue-200 rounded-full border border-blue-500">
              CGPA {jobdata?.eligibility?.minCGPA}+
            </span>
            <span className="px-3 py-1 bg-[#282828] text-sm text-yellow-200 rounded-full border border-yellow-500">
              Branch:
              {jobdata?.eligibility?.branches?.map((branch: string) => (
                <span key={branch} className="px-1">
                  {branch}
                </span>
              ))}
            </span>

            <span className="px-3 py-1 bg-[#282828] text-sm text-green-200 rounded-full border border-green-400">
              Batch:
              {jobdata?.eligibility?.passingYears?.map((item: number) => (
                <span key={item} className="px-1">
                  {item}
                </span>
              ))}
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
