import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount () {
    this.props.fetchSurveys();
  }

  renderSurveys () {
    return this.props.surveys.reverse().map((survey, idx) => (
      <div key={idx} className="card bg-light survey-item">
        <div className="card-header">{survey.title}</div>
        <div className="card-body">
          <p className="card-text">{survey.body}</p>
          <p className="card-text sent-date">
            Sent on: {new Date(survey.dateSent).toLocaleDateString("en-US", {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </div>
        <div className="card-footer">
          <div>Yes: {survey.yes}</div>
          <div>No: {survey.no}</div>
        </div>
      </div>
    ));
  }

  render () {
    return this.renderSurveys();
  }
}

const mapStateToProps = ({ surveys }) => {
  return {
    surveys
  };
};

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
