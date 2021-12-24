const initialState = {
    city: "London",
};
  
const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_CITY_NAME":
            return { ...state, city: action.payload };
        default:
            return state;
    }
};
  
export default cityReducer