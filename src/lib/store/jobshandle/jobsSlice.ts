import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jobsdata } from "@/data/jobsdata";
import { Job } from "@/types/job";

interface JobsState {
  jobs: Job[];
}

const initialState: JobsState = {
  jobs: jobsdata,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    applyJob: (state, action: PayloadAction<string>) => {
      const job = state.jobs.find(j => (j.id) === action.payload);
      if (job) {
        job.apply = true;
      }
    },
  },
});

export const { applyJob } = jobsSlice.actions;
export default jobsSlice.reducer;
