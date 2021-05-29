import * as actionTypes from "./actionTypes";

const initialState: SpinState = { spin: false };

const reducer = (
  state: SpinState = initialState,
  action: SpinAction
): SpinState => {
  switch (action.type) {
    case actionTypes.START_SPINNING:
      return {
        spin: true,
      };
    case actionTypes.STOP_SPINNING:
      return {
        spin: false,
      };
  }
  return state;
};

export default reducer;
