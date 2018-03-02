import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  constructor (props) {
    super(props);

    this.state = { showFormReview: false };

    this.toggleShowForm = this.toggleShowForm.bind(this);
  }

  toggleShowForm () {
    this.setState({ showFormReview: !this.state.showFormReview });
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3 survey-wrapper">
          {
            this.state.showFormReview ?
            <SurveyFormReview goBack={this.toggleShowForm} /> :
            <SurveyForm onFormSubmit={this.toggleShowForm} />
          }
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyNew);
