import {
  createStore,
  combineReducers,
  applyMiddleware,
  DeepPartial,
} from 'redux';
//import login, {AccessToken} from './reducers/login/loginReducer';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
// import signin, {SigninState} from './reducers/signin/signinReducer';
// import signup, {SignupState} from './reducers/signup/signupReducer';
// import cartfull, {CartfullState} from './reducers/cart/cartfullReducers';
// import onboarding, {
//   OnboardingState,
// } from './reducers/onboarding/onboardingReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export interface RootState {
  // login: AccessToken;
  // signin: SigninState;
  // signup: SignupState;
  // onboarding: OnboardingState;
  // cartfull: CartfullState;
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers<RootState>({
    // login,
    // signin,
    // signup,
    // onboarding,
    // cartfull,
  }),
);
const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
