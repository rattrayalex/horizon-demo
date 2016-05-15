import React from 'react';

const style = {
  margin: '1rem',
  padding: '1rem',
  border: '1px solid gray',
};

const Job = ({ job: { title, description } }) => (
  <div style={style}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);
export default Job;
