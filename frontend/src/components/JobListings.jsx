import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

const JobListings = ({ jobs }) => {
  const { backgroundColor, color } = useTheme();
  

  return (
    <div className="job-list" style={{ backgroundColor, color}}>
      {jobs.map((job) => (

        <div className="job-preview" key={job.id}>
          <Link to={`/jobs/${job.id}`}>
            <h2>{job.title}</h2>
          </Link>
          <p>Type: {job.type}</p>
          <p>Company: {job.company.name}</p>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
