
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'api';
import {
  fetchRegister,
  fetchCurrent,
  fetchLogin,
  fetchLogout,
} from 'api/auth';
import Notiflix from 'notiflix';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await fetchRegister(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('This user is already exists');
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await fetchLogin(credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Something goes wrong');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await fetchLogout();
    token.unset();
  } catch (error) {
    Notiflix.Notify.failure('Something goes wrong');
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
     
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await fetchCurrent();
      return data;
    } catch (error) {
      
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;


