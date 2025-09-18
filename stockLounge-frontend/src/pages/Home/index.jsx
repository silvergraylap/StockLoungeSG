import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <header className="home-header">
          <h1>Welcome to the Main Page</h1>
          <p>This is the main dashboard of STOCKLOUNGE.</p>
        </header>
        <section className="dashboard-content">
          <div className="widget">
            <h2>Market Overview</h2>
            <p>Market data will be displayed here.</p>
          </div>
          <div className="widget">
            <h2>Recent News</h2>
            <p>News feed will be displayed here.</p>
          </div>
          <div className="widget">
            <h2>Community Activity</h2>
            <p>Latest community posts will be displayed here.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
