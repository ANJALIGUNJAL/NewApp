import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

// Action Definition
export interface SetData {
  type: 'SET_DATA';
  sampleData: Array<any>;
}

// Union Action Types
export type Action = SetData;

// Action Creators
export const setOnboarding = (sampleData: Array<any>): SetData => {
  return {type: 'SET_DATA', sampleData};
};
