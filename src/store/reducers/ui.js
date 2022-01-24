import * as types from '../constants/actionTypes';

const initialState = {
  isMenuOpen: false,
}

const ui = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.IS_MENU_OPEN:
      return { ...state, isMenuOpen: !state.isMenuOpen }
    default:
      return state
  }
}

export default ui;
