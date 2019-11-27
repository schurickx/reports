
const SET_CURRENT_DATE = 'redux-form-examples/date/SET_CURRENT_DATE'
const SET_CURRENT_ORGANIZATION = 'redux-form-examples/date/SET_CURRENT_ORGANIZATION'

const initialState = {
  data: { date: new Date().toLocaleDateString() }
}

const initializeFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_DATE:
      return {
        ...state,
        data: {
          ...state.data,
          date: action.payload
        }
      }
    case SET_CURRENT_ORGANIZATION:
      return {
        ...state,
        data: {
          ...state.data,
          organization: action.payload
        }
      }
    default:
      return state
  }
}

export const setCurrentDate = (payload) => ({ type: SET_CURRENT_DATE, payload })
export const setCurrentOrganization = (payload) => ({ type: SET_CURRENT_ORGANIZATION, payload })

export default initializeFormReducer