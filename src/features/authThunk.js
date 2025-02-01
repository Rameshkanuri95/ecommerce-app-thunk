 // features/authThunk.js
import { loginStart, 
  loginSuccess, 
  loginFailure } from './authSlice';
import { loginUser } from '../api/api';

// export const register = (email, password, username) => async (dispatch) => {
//   dispatch(registerStart());
//   try {
//     const response = await registerUser(email, password, username);
//     dispatch(registerSuccess(response.data));
//   } catch (error) {
//     dispatch(registerFailure(error.message));
//   }
// };

export const login = (email, password) => async (dispatch) => {
  dispatch(loginStart());
  try {
    const response = await loginUser(email, password);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
