import * as actionTypes from "./actionTypes"

export function startSpin() {
  const action: SpinAction = {
    type: actionTypes.START_SPINNING,
  }
  return action
}

export function stopSpin() {
  const action: SpinAction = {
    type: actionTypes.STOP_SPINNING,
  }
  return action
}
