const UserActionTypes ={
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_START',
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',
  EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
  CHECK_USER_SESSION: 'CHECK_USER_SESSION',
  SIGN_OUT_START: 'SIGN_OUT_START',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',
  
};


export default UserActionTypes;

export const googleSignInStart = ()=> ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START
});


export const googleSignInSuccess = user=> ({
  type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
  payload: user
});

export const googleSignInFailure = error=>({
  type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
  payload: error
});



export const emailSignInStart = emailAndPassword=> ({
  type: UserActionTypes.EMAIL_SIGN_IN_START
});


export const emailSignInSuccess = user=> ({
  type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
  payload: user
});

export const emailSignInFailure = error=>({
  type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
  payload: error
});
