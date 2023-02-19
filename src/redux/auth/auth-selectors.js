export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserPhoto = state => state.auth.user.photo;
export const getToken = state => state.auth.token;
export const getLoader = state => state.auth.isLoading;
export const getLoginError = state => state.auth.error.logIn;
export const getSignUpError = state => state.auth.error.signUp;
export const getUser = state => state.auth.user;
