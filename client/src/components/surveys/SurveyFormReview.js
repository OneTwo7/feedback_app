import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { submitSurvey } from '../../actions';

import FIELDS from './formFields';

const SurveyFormReview = ({ goBack, values, submitSurvey, history }) => {
  const reviewFields = () => (
    FIELDS.map(({ label, name }, idx) => (
      <div key={idx} className="form-group">
        <label>{label}</label>
        <div>{values[name]}</div>
      </div>
    ))
  );

  const onSubmit = () => {
    submitSurvey(values, history);
  };

  return (
    <div id="survey-review">
      <h1>Please confirm your entries</h1>
      {reviewFields(values)}
      <button
        type="button"
        onClick={goBack}
        className="btn btn-secondary"
      >
        Back
      </button>
      <button
        type="button"
        className="btn btn-success"
        id="survey-submit"
        onClick={onSubmit}
      >
        Send Survey
        <i className="ion-email" />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    values: state.form.surveyForm.values
  };
};

export default withRouter(connect(mapStateToProps, {
  submitSurvey
})(SurveyFormReview));
