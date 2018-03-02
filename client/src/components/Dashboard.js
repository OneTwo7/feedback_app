import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <Link className="fixed-button" to="/surveys/new">
      <i className="ion-plus-round"></i>
    </Link>
  </div>
);

export default Dashboard;
