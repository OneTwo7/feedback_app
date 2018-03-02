import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

import FIELDS from './formFields';

class SurveyForm extends Component {
  renderFields () {
    return (
      FIELDS.map(({ label, name }, idx) => (
        <Field
          key={idx}
          label={label}
          type="text"
          name={name}
          component={SurveyField}
        />
      ))
    );
  }

  render () {
    return (
      <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
        {this.renderFields()}
        <Link to="/surveys" className="btn btn-secondary">
          Cancel
        </Link>
        <button id="survey-submit" className="btn btn-primary" type="submit">
          Next
          <i className="ion-checkmark-round" />
        </button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  FIELDS.forEach(({ name }) => {
    if (!values[name] || !values[name].trim().length) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
