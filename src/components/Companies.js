import React from 'react';
import Company from './Company';


const Companies = ({ companies }) => (
  <div>
    {companies.map(company =>
      <Company company={company} key={company.id} />
    )}
  </div>
);
export default Companies;
