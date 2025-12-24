export interface Job {
  id: string;
  title: string;
  company: string;
  tags: string[];
  description: string;
  eligibility: {
    minCGPA: number;
    branches: string[];
    passingYears: number[]; 
  };
  apply:boolean
}
