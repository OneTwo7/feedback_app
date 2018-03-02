import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => (
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <SurveyList />
      <Link className="fixed-button" to="/surveys/new">
        <i className="ion-plus-round"></i>
      </Link>
    </div>
  </div>
);

export default Dashboard;
