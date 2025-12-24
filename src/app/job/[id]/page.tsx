"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/lib/store/store";
import { applyJob } from "@/lib/store/jobshandle/jobsSlice";
import toast from "react-hot-toast";
import Apply from "@/components/Apply";
const JobDetail = () => {
  const { id } = useParams();
  const [appsubmit, setAppsubmit] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const jobDetail = useSelector((state: RootState) =>
    state.jobs.jobs.find((job) => job.id === id)
  );

  const handleApply = () => {
    if (typeof id === "string") {
      dispatch(applyJob(id));
      setAppsubmit(true);
      toast.success("Application apply successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      console.error("Invalid job id");
    }
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-8 bg-[#1a1a2e] rounded-xl shadow-lg text-white mt-10 relative">
        <button
          className="mb-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded transition w-fit absolute right-5 top-5 flex gap-2"
          onClick={() => window.history.back()}
        >
          <ArrowLeft /> Back
        </button>
        <h2 className="text-3xl font-bold mb-4 text-blue-300">
          Job Application
        </h2>
        <div className="space-y-3">
          <div>
            <span className="font-semibold text-teal-200">ID:</span>
            <span className="ml-2 text-gray-300">{jobDetail?.id}</span>
          </div>
          <div>
            <span className="font-semibold text-teal-200">Title:</span>
            <span className="ml-2 text-gray-300">{jobDetail?.title}</span>
          </div>
          <div>
            <span className="font-semibold text-teal-200">Company:</span>
            <span className="ml-2 text-gray-300">{jobDetail?.company}</span>
          </div>
          <div>
            <span className="font-semibold text-teal-200">Tags:</span>
            {jobDetail?.tags.map((item, index) => {
              return (
                <span key={index} className="ml-2 text-gray-300">
                  {item}
                </span>
              );
            })}
          </div>
          <div>
            <span className="font-semibold text-teal-200">Description:</span>
            <span className="ml-2 text-gray-300">{jobDetail?.description}</span>
          </div>
          <div>
            <span className="font-semibold text-teal-200">Eligibility:</span>
            <div className=" mt-2 space-y-1">
              <div>
                <span className="font-semibold text-pink-200">Min CGPA:</span>
                <span className="ml-2 text-gray-300">
                  {jobDetail?.eligibility?.minCGPA}
                </span>
              </div>
            </div>
            <div>
              <span className="font-semibold text-pink-200">Branches:</span>
              {jobDetail?.eligibility?.branches?.map((item, index) => {
                return (
                  <span key={index} className="ml-2 text-gray-300">
                    {item}
                  </span>
                );
              })}
            </div>
            <div>
              <span className="font-semibold text-pink-200">
                Passing Years:
              </span>
              {jobDetail?.eligibility?.passingYears?.map((item, index) => {
                return (
                  <span key={index} className="ml-2 text-gray-300">
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={handleApply}
          disabled={jobDetail?.apply}
          className={`px-6 py-2 rounded-full font-semibold shadow transition-all
    ${
      jobDetail?.apply
        ? "text-green-300 border border-green-500 cursor-not-allowed"
        : "text-green-300 border border-green-500 hover:bg-green-500 hover:text-white"
    }`}
        >
          {jobDetail?.apply ? "Applied" : "Apply Now"}
        </button>
      </div>
      {appsubmit && <Apply setAppsubmit={setAppsubmit} />}
    </>
  );
};

export default JobDetail;
