import React from 'react';
import Job from './Job';


const Jobs = ({ jobs }) => (!jobs ? null :
  <div>
    {jobs.map(job =>
      <Job job={job} key={job.id} />
    )}
  </div>
);
export default Jobs;
