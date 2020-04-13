import {
  createStore,
  combineReducers,
  applyMiddleware,
  DeepPartial,
} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import sample, {sampleDataState} from './reducers/sample/sampleReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

export interface RootState {
  sample: sampleDataState;
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers<RootState>({
    sample,
  }),
);
const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default store;
