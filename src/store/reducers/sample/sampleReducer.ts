import {Action} from '../../actions/sample/sampleAction';

// States' definition
export interface sampleDataState {
  sampleData: Object;
}

export interface State {
  sampleData: sampleDataState;
}

const initialState: sampleDataState = {
  sampleData: {
    data: [
      {
        id: 'ord001',
        name: 'Whisky',
        price: '17.56',
      },
      {
        id: 'ord002',
        name: 'Beer',
        price: '10.56',
      },
      {
        id: 'ord003',
        name: 'Kingfisher',
        price: '11.56',
      },
    ],
  },
};

const sampleDataState = (
  state: sampleDataState = initialState,
  action: Action,
): sampleDataState => {
  switch (action.type) {
    case 'SET_DATA':
      return {...state, sampleData: action.sampleData};
  }
  return state;
};
export default sampleDataState;
