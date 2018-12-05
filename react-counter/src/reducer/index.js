const initialState = {
sum: 0,
counters: []

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "SUM":
    return { 
      ...state,
      sum: state.sum + payload
    }
  case "GENERATE_COUNTERS":
    return {
      ...state,
      counters: new Array(payload).fill(0).map(counter=>{
        return {
          id:new Date().getTime() + Math.random(), //want it become unique
          number:0
        };
      })
    };

    case "INCREASE_ONE":

    return {
      ...state,
      counters: state.counters.map(counterItem => {
        if (counterItem.id===payload){
          return {
            ...counterItem,
            number: counterItem.number + 1, 
          };
        }
        else {
          return counterItem;
        };
      })
    }
  

    case "DECREASE_ONE":
    return {
      ...state,
      counters: state.counters.map(counterItem => {
        if (counterItem.id===payload){
          return { 
            ...counterItem,
            number: counterItem.number - 1
          };
        }
        else {
          return counterItem;
          }
      }),
    };
  default:
    return state
  }
}
