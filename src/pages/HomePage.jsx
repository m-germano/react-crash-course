import React from 'react';

import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

ViewAllJobs;

const HomePage = () => {
  return (
    <>
      <Hero title="Test title" subtitle="this is the subtitle" />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
