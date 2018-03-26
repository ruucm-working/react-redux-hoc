import { log } from 'ruucm-util'
// ------------------------------------
// Constants
// ------------------------------------
export const FORM_SELECT_CHANGE = 'FORM_SELECT_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------

export function handleSelectChange(data) {
  log('data', data);
  return {
    type    : FORM_SELECT_CHANGE,
    payload : data
  }
}

export const actions = {
  handleSelectChange
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FORM_SELECT_CHANGE] : (state, action) => action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
