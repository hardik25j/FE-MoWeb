import React from 'react';
import CardList from './card-list/CardList';
import AreaChart from './charts/AreaChart';
import BarChart from './charts/BarChart';

const Dashboard = () => {
  return (
    <React.Fragment>
      <main>
        {/* ----------------------------- Dashboard ----------------------------- */}
        <div className="container-fluid px-4">
          <h1 className="mt-4">Dashboard</h1>
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>

          {/* ----------------------------- Four Cards ----------------------------- */}
          <div className="row">
            <CardList />
          </div>

          {/* ----------------------------- Graphs ----------------------------- */}
          <div className="row">
            <div className="col-xl-6">
              <AreaChart />
            </div>
            <div className="col-xl-6">
              <BarChart />
            </div>
          </div>

          {/* ----------------------------- Graphs ----------------------------- */}
          <div className="card mb-4"></div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Dashboard;