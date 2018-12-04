const initialState = {
sum: 0,

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "SUM":
    return { sum: state.sum + payload }
  default:
    return state
  }
}
