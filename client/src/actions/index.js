import axios from 'axios';
import { FETCH_USER } from './types';

const dispatchFetchUser = (dispatch, user) => (
  dispatch({
    type: FETCH_USER,
    payload: user
  })
);

export const fetchUser = () => (
  async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatchFetchUser(dispatch, res.data);
  }
);

export const handleToken = token => (
  async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatchFetchUser(dispatch, res.data);
  }
);

export const submitSurvey = (values, history) => (
  async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');

    dispatchFetchUser(dispatch, res.data);
  }
);
