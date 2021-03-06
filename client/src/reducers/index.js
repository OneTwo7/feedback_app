import { combineReducers } from 'redux';
import auth from './authReducer';
import { reducer as reduxForm } from 'redux-form';
import surveys from './surveyReducer';

export default combineReducers({
  auth,
  surveys,
  form: reduxForm
});
